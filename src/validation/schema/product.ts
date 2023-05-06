import Joi from "joi";

export default {
	add: {
		_id: Joi.string().required(),
		name: Joi.string().required(),
		desc: Joi.string().required(),
		points: Joi.string().required(),
	},
};
