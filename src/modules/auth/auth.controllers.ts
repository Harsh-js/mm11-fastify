import { asyncWrapper } from "@helpers/response-helpers";
import authService from "./auth.services";
import models from "@models/index";

const authController = {
	states: asyncWrapper(async (req, res) => {
		return { hello: "hi" };
	}),
	states2: async (req: any, res: any) => {
		const list = await models.states.findAll({});
		return list;
	},
};

export default authController;
