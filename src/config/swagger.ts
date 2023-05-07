import env from "./env";

const convert = require("joi-to-json");

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
			{ name: "user", description: "User related end-points" },
		],
		// securityDefinitions: {
		//     apiKey: {
		//         type: "apiKey",
		//         name: "Authorization",
		//         in: "header",
		//         scheme: "bearer",
		//         bearerFormat: "JWT",
		//         description: "JWT access token",
		//     },
		// },
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
	exposeRoute: true,
	transform: ({ schema, url }: any) => {
		const {
			params,
			body,
			querystring,
			headers,
			response,
			...transformedSchema
		} = schema;
		let transformedUrl = url;

		// Transform the schema as you wish with your own custom logic.
		// In this example convert is from 'joi-to-json' lib and converts a Joi based schema to json schema
		if (params) transformedSchema.params = convert(params);
		if (body) transformedSchema.body = convert(body);
		// console.log('transformedSchema.body: ', transformedSchema.body);
		if (querystring) transformedSchema.querystring = convert(querystring);
		if (headers) transformedSchema.headers = convert(headers);
		if (schema.response) transformedSchema.response = schema.response;

		// can add the hide tag if needed
		if (url.startsWith("/internal")) transformedSchema.hide = true;

		// can transform the url
		if (url.startsWith("/latest_version/endpoint"))
			transformedUrl = url.replace("latest_version", "v3");

		return { schema: transformedSchema, url: transformedUrl };
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
