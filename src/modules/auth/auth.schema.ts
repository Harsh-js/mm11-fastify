import { schemaWrapper } from "@helpers/schemaWrapper";
import modelSchema from "@models/json/modelSchema";
import { RouteShorthandOptions } from "fastify";
import Joi from "joi";

const s = new schemaWrapper({
	tags: ["auth"],
});

const authSchema: { [key: string]: RouteShorthandOptions } = {
	test: s.schema(null, null, { hi: Joi.string() }, { id: Joi.string() }),
	states: s.schema(null, null, [modelSchema.states], null),
};

export default authSchema;
