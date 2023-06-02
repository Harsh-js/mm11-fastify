import { R, asyncWrapper } from "@helpers/response-helpers";
import fixtureService from "./fixture.service";
import models from "@models/index";
import apiError from "@helpers/errors";

const fixtureController = {
	test: asyncWrapper(async (req, res) => {
		return R(true, "Hello from fixture");
	}),
	list: asyncWrapper(async (req, res) => {
		let page = Number.parseInt(req.query?.page) || 0;
		let size = Number.parseInt(req.query?.size) || 4;

		if (!req.query?.page) {
			size = 25;
		}

		return await fixtureService.getPaginatedList(page, size);
	}),
};
export default fixtureController;
