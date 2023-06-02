import db from "@db/mysql";
import redis from "@db/redis";
import { customError } from "@helpers/AppErr";
import apiError from "@helpers/errors";
import redisKey from "@helpers/redisKey";
import models from "@models/index";
import moment from "moment";
import { Op } from "sequelize";
import { FixtureListResponse } from "./fixture";
import { R } from "@helpers/response-helpers";

const fixtureService = {
	test: async () => {},
	getPaginatedList: async (page: number, size: number) => {
		const key = redisKey.fixtureList(page, size);
		const metaKey = redisKey.fixtureListMeta(page, size);

		let fixtureData = await redis.get(key);
		let fixtureMeta = await redis.get(metaKey);

		if (!fixtureData) {
			const data: {
				rows: FixtureListResponse[];
				count: number;
			} = await models.fixtures.findAndCountAll({
				where: {
					is_active: 1,
					pre_squad: 1,
					status: ["NOT STARTED"],
					starting_at: {
						[Op.gt]: moment.now(),
					},
				},
				limit: size,
				offset: page * size,
				attributes: {
					include: [
						[
							db.sequelize.literal(
								`(SELECT COUNT(*) FROM contests WHERE contests.fixture_id=fixtures.id AND contests.status = 'LIVE')`,
							),
							"contests_count",
						],
					],
				},
				order: [
					["lineup_announced", "DESC"],
					["sequence_by", "ASC"],
					["starting_at", "ASC"],
				],
			});

			let response = [];

			let default_a_color = "4e8dfe";
			let default_b_color = "63e474";

			for (let d of data?.rows) {
				d = d.toJSON();

				d.fixture_reminder = false;
				d.series_reminder = false;

				if (d.teama_color == null || !d.teama_color) {
					d.teama_color = default_a_color;
				}

				if (d.teamb_color == null || !d.teamb_color) {
					d.teamb_color = default_b_color;
				}

				let today = moment();
				let current = moment(d.starting_at);
				let seconds = current.diff(today, "seconds");
				d.seconds = seconds;

				response.push(d);
			}

			// response = response.filter((f) => {
			// 	let today = moment();
			// 	let current = moment(f.starting_at);
			// 	return current.diff(today, "seconds") > 0;
			// });
			// const regex = /india/g;

			// const list = [124968, 124973]

			let meta = {
				total_page: Math.ceil(data?.count / size),
				total_count: data?.count,
				current_page: page,
				current_size: size,
			};

			await redis.set(key, JSON.stringify(response), "EX", 60);
			await redis.set(metaKey, JSON.stringify(meta), "EX", 60);
			return R(true, null, response, meta);
		} else {
			return R(
				true,
				null,
				JSON.parse(fixtureData),
				fixtureMeta ? JSON.parse(fixtureMeta) : {},
			);
		}
	},
};
export default fixtureService;
