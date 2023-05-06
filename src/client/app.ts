import Fastify, { FastifyRequest, FastifyReply, HTTPMethods } from "fastify";
import Joi from "joi";
import "joi-extract-type";
import swagger, { FastifyStaticSwaggerOptions } from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import swaggerOptions from "@config/swagger";
import AppErr from "@helpers/AppErr";
import fastifyRoutes from "@fastify/routes";
import { log } from "@helpers/logger";
import routes from "./routes";
import { errorHandler } from "@middleware/errorHanlder";
const convert = require("joi-to-json");

const schema = Joi.object({
	name: Joi.string().default("something").optional(),
	age: Joi.number().integer().min(0).max(130).optional(),
	email: Joi.string().email(),
});

const paramSchema = Joi.object({
	_id: Joi.string().optional(),
});

async function main() {
	try {
		const server = Fastify();

		await server.register(require("fastify-joi"));

		await server.register(fastifyRoutes);

		server.setValidatorCompiler(({ schema, ...other }: any) => {
			console.log("other: ", other);
			return (data) => {
				const val = schema.validate(data);
				if (val?.error) {
					throw Error(val?.error?.message);
				}

				return val;
			};
		});

		await server.register(swagger, swaggerOptions);

		await server.register(swaggerUi, swaggerOptions);

		server.get(
			"/healthcheck",
			{
				schema: {
					response: {
						200: {
							type: "object",
							properties: {
								message: { type: "string", default: "hiiiii" },
							},
						},
					},

					querystring: schema,
					tags: ["user"],
				},
			},
			async (req, res) => {
				return { hello: "world" };
			},
		);

		server.post(
			"/healthcheck/:id",
			{
				schema: {
					params: paramSchema,
					response: {
						200: {
							type: "object",
							properties: {
								message: { type: "string" },
							},
						},
					},

					querystring: schema,
					body: schema,
					tags: ["user"],
				},
			},
			async (req, res) => {
				return { hello: "world" };
			},
		);

		server.get("/hello", {
			schema: {
				response: {
					200: convert(schema),
				},
			},
			handler: async (request, reply) => {
				console.log("hello route called");
				// server.routes;
				const data = JSON.stringify(
					Array.from(server.routes.entries()).reduce((o: any, [key, value]) => {
						o[key] = value;

						return o;
					}, {}),
				);

				return data;
			},
		});

		server.register(routes.auth, { prefix: "/v1" });

		server.setErrorHandler(errorHandler);

		await server.ready();

		server.swagger({});

		await server.listen({
			host: "0.0.0.0",
			port: 3001,
		});

		console.log(`Server ready at http://localhost:3000`);
		return server;
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
}

main();
