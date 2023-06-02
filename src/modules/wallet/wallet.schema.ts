import { schemaWrapper } from "@helpers/schemaWrapper";
import modelSchema from "@models/json/modelSchema";
import { RouteShorthandOptions } from "fastify";
import Yup from "yup";

// schema( body, query, response, params)

const s = new schemaWrapper({
	tags: ["wallet"],
});

const walletSchema: { [key: string]: RouteShorthandOptions } = {
	test: s.schema(null, null, { hi: Yup.string() }, { id: Yup.string() }),
};

export default walletSchema;
