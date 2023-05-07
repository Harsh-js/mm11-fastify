import { FastifyInstance } from "fastify";
import cn from "./auth.controllers";
import modelSchema from "@models/json/modelSchema";
import Joi from "joi";
import schema from "./auth.errors";

const authRoute = async (app: FastifyInstance) => {

	app.post('/test/:id', schema.test, cn.test)
	// app.get(
	// 	"/states",
	// 	{

	// 	},
	// 	cn.states2,
	// );
};

export default authRoute;
