// import Joi from "joi";
import env from "./env";
import {
	object,
	string,
	array,
	tuple,
	date,
	boolean,
	number,
	mixed,
} from "yup";

// const convert = require("joi-to-json");
import { convertSchema } from "@sodaru/yup-to-json-schema";

const removeKeyFromObj = (obj: any, key: string) => {
	for (let _key in obj) {
		if (_key == key) {
			delete obj[key];
		}

		if (typeof obj[_key] == "object" && Object.keys(obj[_key]).length) {
			removeKeyFromObj(obj[_key], key);
		}
	}
};

export default {
	routePrefix: "/api/documentation",
	swagger: {
		info: {
			title: "node fastify app init - swagger",
			description: "Testing the Fastify swagger API",
			version: "1.0.0",
		},
		externalDocs: {
			url: "https://swagger.io",
			description: "Find more info here",
		},
		host: `localhost:${env.port}`,
		schemes: ["http"],
		consumes: ["application/json"],
		produces: ["application/json"],
		tags: [
			{ name: "auth", description: "User related end-points" },
			{ name: "fixture", description: "Contest related end-points" },
			{ name: "contest", description: "Contest related end-points" },
		],
		securityDefinitions: {
			Bearer: {
				type: "apiKey",
				name: "Authorization",
				in: "header",
			},
		},
	},
	uiConfig: {
		// docExpansion: "full",
		deepLinking: true,
	},
	uiHooks: {
		// @ts-ignore
		onRequest: function (request, reply, next) {
			next();
		},
		preHandler: function (request: any, reply: any, next: () => void) {
			next();
		},
	},
	staticCSP: true,
	// @ts-ignore
	transformStaticCSP: (header) => header,
	exposeRoute: false,
	transform: ({ schema, url }: any) => {
		let transformedUrl = url;

		// Transform the schema as you wish with your own custom logic.
		// In this example convert is from 'joi-to-json' lib and converts a Joi based schema to json schema
		if (schema?.params) schema.params = convertSchema(schema?.params);
		if (schema?.body && typeof schema.body == "function")
			schema.body = convertSchema(schema?.body);
		// console.log('transformedSchema.body: ', transformedSchema.body);
		if (schema?.querystring)
			schema.querystring = convertSchema(schema?.querystring);
		if (schema?.headers) schema.headers = convertSchema(schema?.headers);
		if (schema?.response) {
			for (let code in schema?.response) {
				if (typeof schema.response?.[code]?.describe !== "function") {
					schema.response[code] = schema.response[code];
				} else {
					schema.response[code] = convertSchema(
						object({
							status: boolean().required(),
							message: string().required(),
							data: schema.response[code],
						}),
					);
				}
			}
		} else {
			schema.response = {};

			schema.response["200"] = convertSchema(
				object({
					status: boolean().required(),
					message: string().required(),
					data: mixed().required(),
				}),
			);
		}

		removeKeyFromObj(schema, "default");

		// can add the hide tag if needed
		if (url.startsWith("/internal")) schema.hide = true;

		// can transform the url
		if (url.startsWith("/latest_version/endpoint"))
			transformedUrl = url.replace("latest_version", "v3");

		return { schema: schema, url: transformedUrl };
	},
	securityHandlers: {
		apiKey: (req: any, scopes: any, next: any) => {
			const apiKey = req.headers["x-api-key"];
			if (!apiKey || apiKey !== "my-secret-api-key") {
				const error = new Error("Unauthorized");
				// error.statusCode = 401
				error.message = "Invalid or missing API key";
				next(error);
				return;
			}
			next();
		},
	},

	customOptions: {
		swaggerOptions: {
			onComplete: () => {
				const elements = document.querySelectorAll(".opblock-summary-method");
				elements.forEach((el) => {
					const copyButton = document.createElement("button");
					copyButton.innerHTML = "Copy";
					copyButton.addEventListener("click", () => {
						const path = el.getAttribute("data-path");
						const method = el.getAttribute("data-method");
						const curl = `curl -X ${method} http://localhost:3000${path}`;
						// clipboard.writeSync(curl)
					});
					el?.parentNode?.appendChild(copyButton);
				});
			},
		},
	},
	swaggerUiOpts: {
		theme: "Monokai",
	},
};
