import { schemaWrapper } from "@helpers/schemaWrapper";
import modelSchema from "@models/json/modelSchema";
import { RouteShorthandOptions } from "fastify";
import Joi from "joi";

const s = new schemaWrapper({
	tags: ["contest"],
});

// schema( body, query, response, params)

const contestSchema = {
	test: s.schema(null, null, { hi: Joi.string() }, { id: Joi.string() }),
	joinMulty: s.schema({
		contest_id: Joi.string().required(),
		user_team_id: Joi.array().required(),
	}) as RouteShorthandOptions,
};

export default contestSchema;
