import { FastifyRequest } from "fastify";
import { customError } from "@helpers/AppErr";
import apiError from "@helpers/errors";
import jwt from "@helpers/jwt";
import env from "@config/env";
export interface ITokenDecoded {
	aud: string;
	exp: number;
	iat: number;
}

export const validateHeadersAuth = (req: FastifyRequest): string => {
	const header: string | undefined = req.headers.authorization;
	if (!header) {
		customError(apiError.unauthorized);
	}
	const accessToken: string = header!.split(" ")[1];
	if (!accessToken) {
		customError(apiError.unauthorized);
	}
	return accessToken;
};

export const verifyToken = async (
	request: FastifyRequest,
): Promise<boolean> => {
	try {
		const token = validateHeadersAuth(request);
		const decoded: ITokenDecoded = Object(jwt.verify(token));

		request.userId = decoded.aud;
		return true;
	} catch (err) {
		customError(apiError.unauthorized);

		return false;
	}
};

export default { verifyToken };
