// // 👇️ ts-nocheck ignores all ts errors in the file
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-nocheck

import AppErr from "@helpers/AppErr";
import { R } from "@helpers/response-helpers";
import modelSchema from "@models/json/modelSchema";
import Joi, { AnySchema } from "joi";

type SchemaKeys<T> = {
	[K in keyof T]: T[K] extends AnySchema ? K : never;
}[keyof T];

export function pick<
	T extends Record<string, AnySchema>,
	K extends SchemaKeys<T>,
>(obj: T, keys: K[]): Pick<T, K> {
	if (!keys.length) return obj;
	const result = {} as Pick<T, K>;

	keys.forEach((key) => {
		if (obj.hasOwnProperty(key)) {
			result[key] = obj[key];
		}
	});

	return result;
}

export const Validate = (
	res: any,
	keys: any,
	obj: any,
	body: any,
	{ unknown = false },
) => {
	let Pick = pick(keys, obj);
	let schema = Joi.object(Pick).unknown(unknown).validate(body);
	if (schema.error) {
		throw new AppErr(schema.error.message);
	}

	let data = schema.value;
	return data;
};
