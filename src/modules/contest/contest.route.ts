import { FastifyInstance } from "fastify";
import cn from "./contest.controller";
import modelSchema from "@models/json/modelSchema";
import Joi from "joi";
import schema from "./contest.schema";

const contestRoute = async (app: FastifyInstance) => {
	app.post("/join-multy", schema.joinMulty, cn.joinMulty);
};
export default contestRoute;
