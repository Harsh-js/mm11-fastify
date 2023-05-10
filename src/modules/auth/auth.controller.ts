import { R, asyncWrapper } from "@helpers/response-helpers";
import authService from "./auth.services";
import models from "@models/index";
import apiError from "@helpers/errors";

const authController = {
	test: asyncWrapper(async (req, res) => {
		console.log("HELLO");
		return { hello: req.params?.id };
	}),
	states: asyncWrapper(async (req: any, res: any) => {
		const list = await authService.listStates();
		return list;
	}),

	statusCheck: asyncWrapper(async (req: any, res: any) => {
		const check = await authService.getSetting("maintenance-check");

		if (check?.value == "true") {
			return R(true, "", null);
		}

		return R(false, apiError.invalidCheck, null);
	}),
};

export default authController;
