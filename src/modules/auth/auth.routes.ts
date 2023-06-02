import { FastifyInstance } from "fastify";
import cn from "./auth.controller";
import schema from "./auth.schema";
import { protectRoutes } from "@middleware/protectRoutes";

const authRoute = async (app: FastifyInstance) => {
	// app.post("/test/:id", schema.test, cn.test);

	/* State List */
	app.get("/states", schema.states, cn.states);
	await protectRoutes(app);
	app.get("/status-check", schema.states, cn.states);
};

export default authRoute;
