const redisKey = {
	contestSpace: (id: any) => `contestSpace:${id}`,
	leaderboard: (contestId: any) => `leaderboard:${contestId}`,
	fixtureReminder: (fixtureId: any) => `fixtureReminder:${fixtureId}`,
	fixtureList: (page: number, size: number) => `fixtures-list_${page}_${size}:`,
	fixtureListMeta: (page: number, size: number) =>
		`fixtures-list_meta_${page}_${size}:`,
	authToken: (token: string) => `auth:${token}`,
	userToken: (token: string) => `userToken:${token}`,
};

export default redisKey;
