import Joi from "joi";

export default {
	ranksbyType: {
		match_type: Joi.string().required(),
		role: Joi.string().required(),
		women: Joi.any().optional().allow("").allow(null),
		team: Joi.any().optional().allow("").allow(null),
	},

	teamRanksbyType: {
		match_type: Joi.string().required(),
	},
};
