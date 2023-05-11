import { FastifyReply as Response, FastifyRequest as Request } from "fastify";
import { customError } from "./AppErr";

export function R(
	status: boolean,
	message: String,
	data?: any,
	meta?: any,
	res?: Response,
) {
	const object = {
		status: status,
		message: message,
		data: data ?? {},
		...(meta && {
			meta: meta ?? {},
		}),
	};
	if (res) {
		return res.send(object);
	}

	return object;
}

interface CustomRequest extends Request {
	params: any;
	body: any;
}

export function asyncWrapper(
	callback: (req: CustomRequest, res: Response) => Promise<any>,
) {
	return function (req: Request, res: Response) {
		callback(req, res)
			.then((d) => res.send(d))
			.catch((err: any) => {
				console.log(err);
				customError(err?.message);
			});
	};
}

/*
	Post.findAndCountAll({
		where: {...},
		order: [...],
		limit: 5,
		offset: 0,
	}).then(function (result) {
		res.render(...);
	});
*/
