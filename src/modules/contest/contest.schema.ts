import { schemaWrapper } from "@helpers/schemaWrapper";
import modelSchema from "@models/json/modelSchema";
import { RouteShorthandOptions } from "fastify";
import Yup, { array, number } from "yup";
import { string } from "yup";

const s = new schemaWrapper({
	tags: ["contest"],
});

// schema( body, query, response, params)

const contestSchema = {
	test: s.schema(null, null, { hi: string() }, { id: string() }),
	joinMulty: s.schema({
		contest_id: string().default("hi").required(),
		user_team_id: array().of(string()).default(["hi"]).required(),
	}),
	joinMultyContestPerUser: s.schema({
		contest_id: string().required(),
		user_team_id: string().required(),
		count: number().required(),
	}),
};

export default contestSchema;
