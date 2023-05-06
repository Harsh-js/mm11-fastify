import Joi from "joi";

export default {
	add: {
		_id: Joi.string().required(),
		title: Joi.string().required(),
		desc: Joi.string().required(),
		from: Joi.date().required(),
		to: Joi.date().required(),
		prize: Joi.string().required(),
		// prize_img: Joi.string().required(),
		prize_desc: Joi.string().required(),
	},
	ranks: {
		key: Joi.string().optional(),
		state: Joi.string().optional(),
		page: Joi.string().optional().allow("").allow(null),
		size: Joi.string().optional().allow("").allow(null),
	},
};
