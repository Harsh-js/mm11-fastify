import Joi from "joi";

export default {
	add: {
		_id: Joi.string().required(),
		type: Joi.string().required(),
		street: Joi.string().required(),
		landmark: Joi.string().optional(),
		city: Joi.string().optional(),
		pin_code: Joi.number().optional(),
		geo_location: Joi.object().optional(),
	},
};
