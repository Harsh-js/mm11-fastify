import Joi from "joi";

const admin = {
	login: {
		phone: Joi.number().required(),
		password: Joi.string().required(),
	},
};

export default {
	admin: admin,
	postMyAd: {
		name: Joi.string().required(),
		companyName: Joi.string().required(),
		phone: Joi.string().required(),
		industryType: Joi.string().required(),
	},
	dontWantAd: {
		name: Joi.string().required(),
		comment: Joi.string().required(),
	},
	profileUpdate: {
		// name: Joi.string().required(),
		username: Joi.string().required(),
	}
};
