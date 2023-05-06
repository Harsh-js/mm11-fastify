import Joi from "joi";

export default {
	add: {
		_id: Joi.string().required(),
		title: Joi.string().required(),
		banner: Joi.string().required(),
		square: Joi.string().required(),
		fullscreen: Joi.string().required(),
		time: Joi.string().required(),
		url: Joi.string().required(),
	},
	updateImage: {
		type: Joi.string().required(),
	},
};
