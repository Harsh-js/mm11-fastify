import { FastifyInstance } from "fastify";
import cn from "./auth.controllers";
import modelSchema from "@models/json/modelSchema";
import Joi from "joi";
const convert = require("joi-to-json");

const authRoute = async (app: FastifyInstance) => {
	app.get(
		"/states",
		{
			schema: {
				tags: ["auth"],
				response: {
					200: convert(modelSchema.states),
				},
			},
		},
		cn.states2,
	);
};

export default authRoute;
