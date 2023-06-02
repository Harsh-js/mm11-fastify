import app from "@client/app";

const test = async () => {
	const fastify = app();

	const get = await fastify.inject().get("/auth/states");
	console.log("get: ", get.json());
};

test();
