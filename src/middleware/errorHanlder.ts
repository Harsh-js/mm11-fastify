import AppErr from "@helpers/AppErr";

export const errorHandler = (error: any, request: any, reply: any) => {
	const err: AppErr = error;
	reply.status(err.statusCode || 200).send({
		status: false,
		message: error.message,
		data: err.data
	})
}
