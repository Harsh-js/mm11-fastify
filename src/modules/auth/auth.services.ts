import { customError } from "@helpers/AppErr";
import apiError from "@helpers/errors";
import models from "@models/index";

import { settingsAttributes } from "@models/settings";

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

	getSetting: async (
		key: string,
		parse?: boolean,
		ignore?: boolean,
	): Promise<settingsAttributes | null> => {
		let setting = await models.settings.findOne({
			where: {
				key: key,
			},
		});

		if (!setting) {
			if (!ignore) {
				return customError(apiError.noSettingFound);
			}
			return null;
		}

		const data = setting.toJSON();

		if (parse) {
			try {
				data.value = JSON.parse(data.value);
			} catch (err) {}
		}

		return data;
	},
};

export default authService;
