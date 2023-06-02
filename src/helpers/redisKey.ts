const redisKey = {
	contestSpace: (id: any) => `contestSpace:${id}`,
	leaderboard: (contestId: any) => `leaderboard:${contestId}`,
	fixtureReminder: (fixtureId: any) => `fixtureReminder:${fixtureId}`,
	fixtureList: (page: number, size: number) => `fixtures-list_${page}_${size}:`,
	fixtureListMeta: (page: number, size: number) =>
		`fixtures-list_meta_${page}_${size}:`,
};

export default redisKey;
