import jwt from "@helpers/jwt";
import { Request, Response, NextFunction } from "express";

const ignorePaths = [
	"/user/auth/login",
	"/user/auth/test",
	"/user/auth/register",
	"/user/auth/send-mobile-otp",
	"/user/auth/get-otp",
	"/user/auth/verify-mobile-otp",
	"/user/project/list",
	"/user/project/detail",
	"/user/project/add-temp",
	"/user/auth/google-login",
	"/user/auth/register",
	"/user/auth/forgot-password",
	"/public",
	"/send-test-notification",
	"/user/auth/verify-otp",
	"/user/auth/send-otp",
	"/user/project/get-my-temp",
];

export interface UserAuthRequest extends Request {
	userId?: string; // or any other type
	token: string;
}

export default async function verifyUser(
	req: UserAuthRequest,
	res: Response,
	next: NextFunction,
) {
	let token;

	let ignore = ignorePaths.indexOf(req.path) > -1;

	if (req.url.startsWith("/public")) {
		ignore = true;
	}

	if (ignore) {
		next();
	}

	if (
		req.method === "OPTIONS" &&
		req.headers.hasOwnProperty("access-control-request-headers")
	) {
		return res.send("No DATA");
		// const hasAuthInAccessControl = !!~req.headers[
		// 	"access-control-request-headers"
		// ]
		// 	.split(",")
		// 	.map(function (header) {
		// 		return header.trim();
		// 	})
		// 	.indexOf("authorization");

		// if (hasAuthInAccessControl) {
		// 	return next();
		// }
	}

	if (req.headers && req.headers.authorization) {
		const parts = req.headers.authorization.split(" ");
		if (parts.length === 2) {
			const scheme = parts[0];
			const credentials = parts[1];

			if (/^Bearer$/i.test(scheme)) {
				token = credentials;
				req.token = token;
			} else {
				if (!ignore) {
					return res.json({
						status: false,
						message: "Invalid request.",
						data: null,
					});
				}
			}
		} else {
			if (!ignore) {
				return res.json({
					status: false,
					message: "Invalid request.",
					data: null,
				});
			}
		}
	}

	if (!token && !ignore) {
		return res.json({
			status: false,
			message: "No authorization token was found.",
			data: null,
		});
	}

	if (token) {
		let user: any;
		try {
			user = jwt.verify(token ?? "");
		} catch (e) {
			console.log(e);
		}

		if (!user && !ignore) {
			return res.status(401).json({
				status: false,
				message: "Invalid token.",
				data: null,
			});
		}

		if (user?._id) {
			try {
				req.userId = user?._id;
			} catch (e) {}
		}
	}

	return next();
}
