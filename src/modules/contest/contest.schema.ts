import { schemaWrapper } from "@helpers/schemaWrapper";
import modelSchema from "@models/json/modelSchema";
import { RouteShorthandOptions } from "fastify";
import Joi from "joi";

const s = new schemaWrapper({
	tags: ["contest"],
});

const contestSchema: { [key: string]: RouteShorthandOptions } = {
	test: s.schema(null, null, { hi: Joi.string() }, { id: Joi.string() }),
};

export default contestSchema;
