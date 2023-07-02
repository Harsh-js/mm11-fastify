import { schemaWrapper } from "@helpers/schemaWrapper";
import modelSchema from "@models/json/modelSchema";
import { RouteShorthandOptions } from "fastify";
import Yup, { boolean, number, object, string } from "yup";
import "joi-extract-type";

export const fixtureListResponse = object({
	...modelSchema.fixtures,
	contests_count: number(),
	fixture_reminder: boolean(),
	series_reminder: boolean(),
	teama_color: string().nullable(),
	teamb_color: string().nullable(),
	seconds: number(),
});

export type FixtureListResponse = Yup.InferType<typeof fixtureListResponse>;

// schema( body, query, response, params)

const s = new schemaWrapper({
	tags: ["fixture"],
});

const fixtureSchema = {
	test: s.schema(null, null, { hi: string() }, { id: string() }),
	list: s.schema(
		null,
		{
			page: number(),
			size: number(),
		},
		[fixtureListResponse],
	),
	banner: s.schema(null, null, [object(modelSchema.banners)], null),

};

export default fixtureSchema;
