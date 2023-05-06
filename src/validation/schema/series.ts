import Joi from "joi";

export default {
	updateImage: {
		_id: Joi.number().required(),
	},
};
