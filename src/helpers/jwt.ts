import jwt from "jsonwebtoken";
import env from "config/env";
export default {
	sign: (payload: object) => {
		const token = jwt.sign(payload, env.secret);
		return token;
	},

	verify: (token: string) => {
		const payload = jwt.verify(token, env.secret);
		return payload;
	},
};
