import Joi from "joi";

export default {
	add: {
		_id: Joi.string().required(),
		title: Joi.string().required(),
		url: Joi.string().required(),
		series_id: Joi.string().optional().allow(null).allow(""),
		match_id: Joi.string().optional().allow(null).allow(""),
		tag: Joi.string().optional().allow(null).allow(""),
	},
	addTag: {
		_id: Joi.string().required(),
		title: Joi.string().required(),
		sequence: Joi.number().required(),
	},
};
