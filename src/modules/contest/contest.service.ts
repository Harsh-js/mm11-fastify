import redis from "@db/redis";
import { customError } from "@helpers/AppErr";
import apiError from "@helpers/errors";
import redisKey from "@helpers/redisKey";
import { R } from "@helpers/response-helpers";
import { contestsAttributes } from "@models/contests";
import { fixturesAttributes } from "@models/fixtures";
import models from "@models/index";
import moment from "moment";

export interface CheckSpace {
	contest: contestsAttributes;
	fakeUser: any;
	spaceAvailable: number;
}

const contestService = {
	checkSpace: async (
		contestId: string,
		userTeamIds: string[],
		userId: string,
	): Promise<CheckSpace> => {
		let second_fake_attempt_key = "isSecondAttempt:" + contestId;
		let second_fake_attempt = parseInt(
			(await redis.get(second_fake_attempt_key)) || "0",
		);

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

		if (!contest) {
			return customError(apiError.invalidContest);
		}

		let fakeUser = await contestService.checkforfakeattemp(userId, contest);

		if (fakeUser) {
			redis.set(second_fake_attempt_key, 1);
		}

		if (
			!spaceAvailable ||
			spaceAvailable === null ||
			spaceAvailable < userTeamIds.length
		) {
			const remainedSlot = await contestService.getContestSpaceFromDB(
				contestId,
				contest.total_teams,
			);

			if (remainedSlot <= 0 || (second_fake_attempt && fakeUser) || !fakeUser) {
				await redis.unwatch();
				if (contest.total_teams > 10) {
					return customError(apiError._contestFull, contestId);
				} else {
					return customError(apiError.contestFull, contestId);
				}
			}
		}
		return { contest: contest.toJSON(), fakeUser, spaceAvailable };
	},
	checkBasicCondition: async (
		contest: contestsAttributes & { fixture: fixturesAttributes },
	) => {
		let today = moment();
		let current = moment(contest.fixture.starting_at);

		if (
			contest.fixture.inning_number == 0 &&
			current.diff(today, "seconds") <= 0 &&
			contest.inning_number == 0
		) {
			await redis.unwatch();
			await redis.incr(redisKey.contestSpace(contest.id));
			return R(res, false, `Match is live, you can't join now`, null);
		}
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
	checkforfakeattemp: async (user_id: string, contest: contestsAttributes) => {
		let fake_data: any = await models.settings.findOne({
			where: {
				key: "fake_user",
			},
		});

		fake_data = JSON.parse(fake_data?.value);

		if (contest.total_teams <= 2 && fake_data.is_active == 1) {
			return fake_data.user.find((f: any) => f.real_user == user_id);
		} else {
			return false;
		}
	},
	getContestSpaceFromDB: async (contestId: string, totalTeams: any) => {
		let joinedUserCount = await models.user_contests.count({
			where: {
				contest_id: contestId,
			},
		});

		let remainedSlot = parseInt(`${totalTeams}`) - joinedUserCount;

		return remainedSlot || 0;
	},
};
export default contestService;
