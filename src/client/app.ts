import Fastify, {
	FastifyRequest,
	FastifyReply,
	HTTPMethods,
	FastifyInstance,
} from "fastify";
import Joi from "joi";
import "joi-extract-type";
import swagger, {
	FastifyStaticSwaggerOptions,
	SwaggerOptions,
} from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import swaggerOptions from "@config/swagger";
import AppErr from "@helpers/AppErr";
import fastifyRoutes from "@fastify/routes";
import { log } from "@helpers/logger";
import routes from "./routes";
import { errorHandler } from "@middleware/errorHanlder";
import env from "@config/env";
const convert = require("joi-to-json");

// declare module "fastify" {}

const schema = Joi.object({
	name: Joi.string().default("something").optional(),
	age: Joi.number().integer().min(0).max(130).optional(),
	email: Joi.string().email(),
});

const paramSchema = Joi.object({
	_id: Joi.string().optional(),
});

function main() {
	try {
		const server = Fastify({
			// logger: {
			// 	transport: {
			// 		target: 'pino-pretty',
			// 		options: {
			// 			translateTime: 'HH:MM:ss Z',
			// 			ignore: '*',
			// 		},
			// 	},
			// }
		});

		server.register(require("fastify-joi"));

		server.register(fastifyRoutes);

		server.setSerializerCompiler(
			({ schema, method, url, httpStatus, contentType }) => {
				return (data) => JSON.stringify(data);
			},
		);

		server.setValidatorCompiler(({ schema, ...other }: any) => {
			return (data) => {
				const val = schema.validate(data);
				if (val?.error) {
					throw new AppErr(val?.error?.message);
				}

				return val;
			};
		});

		server.register(swagger, swaggerOptions as SwaggerOptions);

		server.register(swaggerUi, swaggerOptions);

		server.get(
			"/healthcheck",
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
					tags: ["user"],
				},
			},
			async (req, res) => {
				return { hello: "world" };
			},
		);

		server.register(routes.auth, { prefix: "/v1" });

		server.setErrorHandler(errorHandler);

		console.log(`Server ready at http://localhost:${env.port}`);
		return server;
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
}

const runServer = async (app: FastifyInstance) => {
	await app.ready();

	app.swagger({});

	await app.listen({
		host: "0.0.0.0",
		port: env.port,
	});
};

runServer(main());
