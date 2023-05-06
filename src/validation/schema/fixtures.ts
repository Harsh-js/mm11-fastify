import Joi from "joi";

export default {
	add: {
		_id: Joi.string().required(),
		run: Joi.string().required(),
		wicket: Joi.string().required(),
		over: Joi.string().required(),
	},
	addValues: {
		match_id: Joi.number().required(),
		id: Joi.number().required(),
		values: Joi.object().required(),
	},
	vote: {
		match_id: Joi.number().required(),
		voted_team_id: Joi.number().required(),
		other_team_id: Joi.number().required(),
		device_id: Joi.string().required(),
	},

	votes: {
		match_id: Joi.number().required(),
		team_a_id: Joi.number().required(),
		team_b_id: Joi.number().required(),
	},

	squads: {
		team_id: Joi.string().required(),
		series_id: Joi.string().required(),
	},

	commentary: {
		fixture_id: Joi.string().required(),
		page: Joi.string().optional().allow("").allow(null),
		size: Joi.string().optional().allow("").allow(null),
	},
	scorecard: {
		fixture_id: Joi.string().required(),
	},

	session: {
		fixture_id: Joi.string().required(),
	},

	odd: {
		match_id: Joi.number().required(),
		session: Joi.string().required(),
		values: Joi.any().required(),
	},

	odds: {
		match_id: Joi.number().required(),
		ex: {
			lay: Joi.number().required(),
			back: Joi.number().required(),
			teamName: Joi.string().required(),
		},
		over: {
			lay: Joi.number().required(),
			back: Joi.number().required(),
			statusText: Joi.string().required(),
		},
		rnb: {
			lay: Joi.number().required(),
			back: Joi.number().required(),
		},
	},
};
