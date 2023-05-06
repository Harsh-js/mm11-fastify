import Joi from "joi";

export default {
	add: {
		_id: Joi.string().required(),
		title: Joi.string().required(),
		body: Joi.string().required(),
	},
};
