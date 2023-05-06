import { FastifyReply as Response, FastifyRequest as Request } from 'fastify'
import { AppRequest } from "./common";
import { customError } from "./AppErr";

export function R(
	res: Response,
	status: boolean,
	message: String,
	data?: any,
	meta?: any,
) {
	res.send({
		status: status,
		message: message,
		data: data ?? {},
		meta: meta ?? {},
	});
}
export function _R(status: boolean, message: String, data?: any, meta?: any) {
	return {
		status: status,
		message: message,
		data: data ?? {},
		meta: meta ?? {},
	};
}

export function asyncWrapper(callback: (req: Request, res: Response) => Promise<any>) {
	return function (req: Request, res: Response) {
		callback(req, res).catch((err: any) => {
			console.log(err);
			customError(err?.message)
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
