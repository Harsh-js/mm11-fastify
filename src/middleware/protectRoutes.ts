import { FastifyInstance } from "fastify";
import { verifyToken } from "./auth";

const ignorePaths = [];

export const protectRoutes = async (app: FastifyInstance) => {
	app.addHook("onRequest", async (request, reply) => {
		try {
			const requestPath: string = request.routerPath;
			console.log("requestPath: ", requestPath);

			await verifyToken(request, reply);
		} catch (error) {
			reply.send(error);
		}
	});
};

export default { protectRoutes };
