import { R, asyncWrapper } from "@helpers/response-helpers";
import contestService from "./contest.service";
import models from "@models/index";
import apiError from "@helpers/errors";
import redis from "@db/redis";
import redisKey from "@helpers/redisKey";

const contestController = {
	joinMulty: asyncWrapper(async (req, res) => {
		const contestId = req.body.contest_id as string;
		const userTeamIds = req.body.user_team_id as string[];

		return R(true, "Hello from contest");
	}),
};
export default contestController;
