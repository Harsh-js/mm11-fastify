import redis from "@db/redis";
import { customError } from "@helpers/AppErr";
import apiError from "@helpers/errors";
import redisKey from "@helpers/redisKey";
import { R } from "@helpers/response-helpers";
import models from "@models/index";

const contestService = {
	checkSpace: async (contestId: string, userTeamIds: string[]) => {
		const multi = redis.multi();

		let key = redisKey.contestSpace(contestId);

		multi.get(key);
		multi.decr(key);

		let replies = await redis.execAsync(multi);

		if (!replies) {
			return R(false, "Please Try Again", null);
		}

		let spaceAvailable = parseInt(replies[0]);

		await redis.watch(key);
		let contest = await contestService.GetContestDetail(contestId);

		if (
			!spaceAvailable ||
			spaceAvailable === null ||
			spaceAvailable < userTeamIds.length
		) {
		}
		return {};
	},
	GetContestDetail: async (contestId: string, attributes = true) => {
		return await models.contests.findOne({
			where: {
				id: contestId,
				status: "LIVE",
			},
			include: [
				{
					model: models.fixtures,
					as: "fixture",
				},
			],

			...(attributes && {
				attributes: [
					"id",
					"fixture_id",
					"total_teams",
					"entry_fee",
					"max_team",
					"prize",
					"is_confirmed",
					"type",
					"discount",
					"bonus",
					"inning_number",
					"contest_category_id",
					"auto_create_on_full",
				],
			}),
		});
	},
};
export default contestService;
