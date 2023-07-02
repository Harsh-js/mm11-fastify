import { FastifyInstance } from "fastify";
import cn from "./fixture.controller";
import modelSchema from "@models/json/modelSchema";
import Joi from "joi";
import schema from "./fixture.schema";

const fixtureRoute = async (app: FastifyInstance) => {
	app.get("/", schema.list, cn.list);
	app.get("/banner", schema.banner, cn.banner);
};
export default fixtureRoute;
