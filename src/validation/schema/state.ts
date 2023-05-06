import Joi from "joi";

export default {
	add: {
		name: Joi.string().required(),
		_id: Joi.number().required(),
	},
};
