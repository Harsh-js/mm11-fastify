import { schemaWrapper } from "@helpers/schemaWrapper";
import modelSchema from "@models/json/modelSchema";
import { RouteShorthandOptions } from "fastify";
import Yup, { object, string } from "yup";
const s = new schemaWrapper({
	tags: ["auth"],
});

const authSchema: { [key: string]: RouteShorthandOptions } = {
	test: s.schema(null, null, { hi: string() }, { id: string() }),
	states: s.schema(null, null, [object(modelSchema.states)], null),
};

export default authSchema;
