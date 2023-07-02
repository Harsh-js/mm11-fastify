import Fastify, {
	FastifyRequest,
	FastifyReply,
	HTTPMethods,
	FastifyInstance,
} from "fastify";
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
import cors from "@fastify/cors";
import fs from "fs";
import path from "path";
import fastifyMultiPart from "@fastify/multipart";


const util = require("util");

declare module "fastify" {
	interface FastifyRequest {
		userId: any;
	}
}

export default function app() {
	try {
		const server = Fastify({
			logger: {
				transport: {
					target: "pino-pretty",
					options: {
						translateTime: "HH:MM:ss Z",
						ignore: "*",
					},
				},


			},
		});
		// server.register(require("fastify-joi"));

		server.register(cors, {
			// put your options here
			origin: "*",
		});

		server.register(fastifyMultiPart);


		server.register(require("@fastify/static"), {
			root: process.cwd() + "/public/",
			prefix: "/", // optional: default '/'
			// constraints: {}, // optional: default {}
		});

		server.addHook("preHandler", (req, reply, done) => {
			reply.header("Access-Control-Allow-Origin", "*");
			done();
		});

		server.register(fastifyRoutes);

		server.setSerializerCompiler(
			({ schema, method, url, httpStatus, contentType }) => {
				return (data) => JSON.stringify(data);
			},
		);

		server.setValidatorCompiler(({ schema, ...other }: any) => {
			return (data) => {
				console.log("schema: ", schema);
				const val = schema.validateSync(data);
				console.log("val: ", val);
				if (val?.error) {
					console.log("val?.error: ", val?.error);
					throw new AppErr(val?.error?.message);
				}

				return schema;
			};
		});

		server.get("/v2/testroute", async (req, res) => {
			console.log(process.cwd());
			return res.send("hello");
		});

		server.register(swagger, swaggerOptions as SwaggerOptions);

		server.register(swaggerUi, {
			...swaggerOptions,
		});

		// server.get(
		// 	"/healthcheck",
		// 	{
		// 		schema: {
		// 			params: paramSchema,
		// 			response: {
		// 				200: {
		// 					type: "object",
		// 					properties: {
		// 						message: { type: "string" },
		// 					},
		// 				},
		// 			},

		// 			querystring: schema,
		// 			tags: ["user"],
		// 		},
		// 	},
		// 	async (req, res) => {
		// 		return { hello: "world" };
		// 	},
		// );

		server.register(routes.auth, { prefix: "/v2/auth" });
		server.register(routes.fixture, { prefix: "/v2/fixture" });
		server.register(routes.contest, { prefix: "/v2/contest" });

		server.setErrorHandler(errorHandler);

		console.log(server.routes);

		console.log(`Server ready at http://localhost:${env.port}/v2/`);
		return server;
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
}

const runServer = async (app: FastifyInstance) => {
	await app.ready();

	app.swagger({});
	const routes = app.routes;

	const obj: any = {};

	console.debug(
		routes.forEach((value, key) => {
			obj[key] = value;
		}),
	);

	const objectString = JSON.stringify(
		obj,
		(key, value) => {
			if (typeof value === "function") {
				return util.inspect(value);
			}
			return value;
		},
		2,
	);

	fs.writeFileSync(
		process.cwd() + "/routes.js",
		`const data = ${objectString};`,
	);

	await app.listen({
		host: "0.0.0.0",
		port: env.port,
	});
};

runServer(app());
