const redis = require("../_db/redis");

const ValidTypes = ["teams", "contests"];

export async function addUserInMatch(
	fixture_id: number,
	user_id: string,
	type: string,
	counts = 0,
	contest_id = null,
) {
	try {
		// validation check
		if (!type || !counts || isNaN(counts) || !ValidTypes.includes(type)) return;

		// number parsing
		let count = parseInt(`${counts}`);
		// console.log("addUserInMatch called")
		if (type === "contests" && contest_id) {
			// console.log("Addding user count in redis")
			let updatedCount = await redis.hincrby(
				`UserContestCount:${contest_id}`,
				user_id,
				count,
			);
			// console.log('updatedCount: ', updatedCount);
		}

		// upcoming match key
		let key = "user_upcoming_match:" + fixture_id + ":data";

		// get data from cache
		let data = JSON.parse(
			(await redis.hget(key, user_id)) || '{"teams":0,"contests":0}',
		);

		// udpate data into cache
		let update = await redis.hset(
			key,
			user_id,
			JSON.stringify({
				...data,
				[type]: data[type] + count,
			}),
		);

		// check if user joining at first time
		if (data?.teams == 0 && data?.contests == 0) {
			// user's upcmoing match key
			let user_key = `user_upcoming_match:${user_id}:matches`;

			// add match into user's cache
			let add = await redis.sadd(
				`user_upcoming_match:${user_id}:matches`,
				fixture_id,
			);
		}

		return true;
	} catch (e) {
		// console.log("addUserInMatch Error")
		console.log(e);
	}
}
