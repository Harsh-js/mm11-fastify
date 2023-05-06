import Joi from "joi";

export default {
	add: {
		_id: Joi.string().required(),
		items: Joi.any().required(),
		name: Joi.string().required(),
		phone: Joi.number().required(),
		amount: Joi.number().required(),
	},
	updateStatus: {
		_id: Joi.string().required(),
		status: Joi.string().required(),
	},
};
