import models from "@models/index";

const authService = {
	test: async () => {
		models.user_contests.getAttributes();
		console.log(
			"models.user_contests.getAttributes(): ",
			models.user_contests.getAttributes(),
		);
	},
	listStates: async () => {
		let states = await models.states.findAll({
			where: {
				is_active: 1,
			},
		});

		return states;
	},
};

export default authService;
