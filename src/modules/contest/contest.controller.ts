import { R, asyncWrapper } from "@helpers/response-helpers";
import contestService from "./contest.service";
import models from "@models/index";
import apiError from "@helpers/errors";

const contestController = {
	test: asyncWrapper(async (req, res) => {
		return R(true, "Hello from contest");
	}),
};
export default contestController;
