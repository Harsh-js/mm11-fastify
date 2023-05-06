import { asyncWrapper } from "@helpers/response-helpers";
import authService from "./auth.services";

const authController = {
	states: asyncWrapper(async (req, res) => {
		return { hello: "hi" };
	}),
	states2: async (req: any, res: any) => {
		authService.test();
		return { hello: "hi" };
	},
};

export default authController;
