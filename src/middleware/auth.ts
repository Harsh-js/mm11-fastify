import { FastifyReply, FastifyRequest } from "fastify";
import { customError } from "@helpers/AppErr";
import apiError from "@helpers/errors";
import jwt from "@helpers/jwt";
import env from "@config/env";
import redis from "@db/redis";
export interface ITokenDecoded {
	aud: string;
	exp: number;
	iat: number;
}

export const validateHeadersAuth = (req: FastifyRequest): string => {
	const header: string | undefined = req.headers.authorization;
	console.log("req.headers: ", req.headers);
	if (!header) {
		customError(apiError.unauthorized + " 3");
	}
	// const accessToken: string = header!.split(" ")[1];
	const accessToken: string = header || "";
	console.log("accessToken: ", accessToken);

	if (!accessToken) {
		customError(apiError.unauthorized + " 2");
	}
	return accessToken;
};

export const verifyToken = async (
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<boolean> => {
	try {
		const token = validateHeadersAuth(request);
		// const decoded = jwt.verify(token);
		let loginUser: any = await redis.get("auth:" + token);

		if (!loginUser) {
			return reply
				.status(401)
				.send({ status: false, message: "Token mismatch" });
		}

		try {
			loginUser = JSON.parse(loginUser);
		} catch (err) {
			console.log("err: ", err);
		}
		request.userId = loginUser?.id;

		// request.userId = decoded;
		return true;
	} catch (err) {
		console.log("err: ", err);
		console.log("err from here: ");
		customError(apiError.unauthorized + " 1");
		return false;
	}
};

export default { verifyToken };
