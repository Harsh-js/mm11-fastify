import { FastifyInstance } from "fastify";
import cn from "./auth.controllers";

const authRoute = async (app: FastifyInstance) => {
	app.get(
		"/states",
		{
			schema: {
				tags: ["auth"],
				response: {
					200: {
						type: "object",
						properties: {
							id: { type: "string" },
							name: { type: "string" },
							is_active: { type: "string" },
							createdAt: { type: "string" },
							updatedAt: { type: "string" },
						},
						required: ["id", "name", "is_active", "createdAt", "updatedAt"],
					},
				},
			},
		},
		cn.states2,
	);
};

export default authRoute;
