import { FastifyInstance } from "fastify";
import cn from "./wallet.controller";
import modelSchema from "@models/json/modelSchema";
import Joi from "joi";
import schema from "./wallet.schema";

const walletRoute = async (app: FastifyInstance) => {
	app.post("/test/:id", schema.test, cn.test);
};
export default walletRoute;
