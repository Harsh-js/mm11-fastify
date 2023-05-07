import { asyncWrapper } from "@helpers/response-helpers";
import authService from "./auth.services";
import models from "@models/index";

const authController = {
	test: asyncWrapper(async (req, res) => {
		return { hello: "hi" };
	}),
	states2: async (req: any, res: any) => {
		// const list = await models.states.findAll({});
		const list: any = [];
		return list;
	},
};

export default authController;
