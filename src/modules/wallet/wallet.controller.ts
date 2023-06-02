import { R, asyncWrapper } from "@helpers/response-helpers";
import walletService from "./wallet.service";
import models from "@models/index";
import apiError from "@helpers/errors";

const walletController = {
	test: asyncWrapper(async (req, res) => {
		return R(true, "Hello from wallet");
	}),
};
export default walletController;
