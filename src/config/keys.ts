const keys = {
	dashBoardData: {
		key: "dashboardDetails",
		fields: {
			users: "totalAppUsers",
		},
	},
	api: {
		key: "apiCallevents",
		fields: {
			post: "postHits",
			get: "getHits",
		},
	},
	fcmTokens: "fcmTokens",
	fcmToken: "fcmToken",
	videoTagSequence: "videoTagSequence",
	homeMatchSequence: (fixture_id: any) => `homeMatchSequence:${fixture_id}`,
	topics: {
		global: "global",
	},
};
export default keys;
