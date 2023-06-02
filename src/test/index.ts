import Yup, {
	object,
	string,
	array,
	tuple,
	date,
	boolean,
	number,
	mixed,
} from "yup";
import { convertSchema, extendSchema } from "@sodaru/yup-to-json-schema";

const schema = object({
	status: boolean().required(),
	message: string().required(),
	data: mixed().required(),
});

import Joi from "joi";
const convert = require("joi-to-json");

const schema2 = Joi.object({
	status: Joi.boolean().required(),
	message: Joi.string().required(),
	data: Joi.any().required(),
});

console.log(convertSchema(schema));
console.log(convert(schema2));
