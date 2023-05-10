import modelSchema from "@models/json/modelSchema";
import Joi, { AnySchema } from "joi";

type SchemaKeys<T> = {
	[K in keyof T]: T[K] extends AnySchema ? K : never;
}[keyof T];

function pick<T extends Record<string, AnySchema>, K extends SchemaKeys<T>>(
	obj: T,
	keys: K[],
): Pick<T, K> {
	if (!keys.length) return obj;
	const result = {} as Pick<T, K>;

	keys.forEach((key) => {
		if (obj.hasOwnProperty(key)) {
			result[key] = obj[key];
		}
	});

	return result;
}

const picked = pick(modelSchema.adhaar, ["adhaar_number"]);
console.log("picked: ", Joi.object(picked).validate({}).error);
