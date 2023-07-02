import { fixtures } from "@models/fixtures";
import modelSchema from "@models/json/modelSchema";
import Yup from "yup";

export const fixtureListResponse = Yup.object({
	...modelSchema.fixtures,
	contests_count: Yup.number(),
	fixture_reminder: Yup.boolean(),
	series_reminder: Yup.boolean(),
	teama_color: Yup.string().allow(null),
	teamb_color: Yup.string().allow(null),
	seconds: Yup.number(),
});

export type FixtureListResponse = Yup.InferType<typeof fixtureListResponse> & fixtures;
