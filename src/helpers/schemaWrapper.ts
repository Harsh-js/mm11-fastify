import { RouteShorthandOptions } from "fastify";
import Joi from "joi";

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
			obj.schema.body = Joi.object(body);
		}

		if (querystring) {
			obj.schema.querystring = Joi.object(querystring);
		}

		if (response) {
			if (Array.isArray(response)) {
				obj.schema.response = { 200: Joi.array().items(response[0]) };
			} else {
				obj.schema.response = { 200: Joi.object(response) };
			}
		}

		if (params) {
			obj.schema.params = Joi.object(params);
		}
		return obj as RouteShorthandOptions;
	}
}
