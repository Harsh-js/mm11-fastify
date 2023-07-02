import { RouteShorthandOptions } from "fastify";
import Joi from "joi";
import Yup, { array, object } from "yup";
interface schemaWrapperOpt {
	tags: string[];
}

export class schemaWrapper {
	public tags: string[];
	constructor(options: schemaWrapperOpt) {
		this.tags = options.tags;
	}

	public schema(
		body?: any,
		querystring?: any,
		response?: any,
		params?: any,
	): RouteShorthandOptions | any {
		const obj: RouteShorthandOptions = {
			schema: {
				security: [
					{
						Bearer: [],
					},
				],
				tags: [...this.tags],
			},
		};

		if (!obj || !obj?.schema) return null;

		if (body) {
			obj.schema.body = body;
		}

		if (querystring) {
			obj.schema.querystring = object(querystring);
		}

		if (response) {
			if (Array.isArray(response)) {
				obj.schema.response = { 200: array().of(response[0]) };
			} else {
				obj.schema.response = { 200: object(response) };
			}
		}

		if (params) {
			obj.schema.params = object(params);
		}
		return obj as RouteShorthandOptions;
	}
}
