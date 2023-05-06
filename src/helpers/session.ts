import redis from "@db/redis";
import Session from "@models/Session";
import moment from "moment";
import Leaderboard from "./LeaderBoard";
import { formatTime } from "./common";

/**
 * @function AddUserSession
 * @param user_id
 */
export const AddUserSession = async (user_id: any, state_id: any) => {
	const date = moment().startOf("day").format();
	const startTime = moment().unix();
	// console.log("🚀 ~ file: index.ts:201 ~ main7 ~ startTime:", startTime);
	await redis.set(`userLastSessionLog:${user_id}`, startTime);

	// find the document for the user and date
	const query = {
		user: user_id,
		date: date,
		state: state_id,
	};

	const update = {
		$push: { sessions: { start: startTime, end: null } },
	};

	let updateOrCreate = await Session.updateOne(query, update, {
		upsert: true,
		new: true,
	});

	console.log("User session updated");
	// console.log(
	// 	"🚀 ~ file: index.ts:218 ~ main7 ~ updateOrCreate:",
	// 	updateOrCreate,
	// );
	return true;
};

/**
 * @function updateUserSession
 * @param user_id
 */
export const updateUserSession = async (user_id: any, state_id: any) => {
	const today = moment();

	const date = moment().startOf("day").format();
	const endTime = moment().unix();
	// console.log("🚀 ~ file: index.ts:199 ~ main7 ~ date:", date);
	// console.log("🚀 ~ file: index.ts:201 ~ main7 ~ startTime:", endTime);
	const startTime = await redis.get(`userLastSessionLog:${user_id}`);

	// find the document for the user and date
	const query = {
		user: user_id,
		date: date,
		state: state_id,
		sessions: {
			$elemMatch: { ...(startTime && { start: startTime }), end: null },
		},
	};

	const update = {
		$set: { "sessions.$.end": endTime },
	};

	let updated = await Session.findOneAndUpdate(query, update, { new: true });

	if (!updated) {
		return false;
	}

	updated.time = updated.sessions
		.map((s: any) => (s.end || s.start) - s.start)
		.reduce((a: any, b: any) => a + b, 0);

	const updatedSession = updated.sessions?.find((f) => f.end == endTime);

	let totalTime = 0;

	if (updatedSession) {
		console.log("updatedSession: ", updatedSession);
		totalTime = updatedSession?.end - updatedSession?.start;
	}

	// if (
	// 	user_id == "640ffc808372c7f34944906b" ||
	// 	user_id == "640ac0945f44a01bb3136e91"
	// ) {
	// 	totalTime = 1000;
	// }
	console.log("totalTime: ", totalTime);

	await updated.save();
	0;

	const lb = new Leaderboard(`LeaderboardWatchTime2:${date}_all`);
	const lbFull = new Leaderboard(`UserTotalUsageLead:24x7`);

	await lb.updateScore(updated?.user?.toString(), totalTime);
	await lbFull.updateScore(updated?.user?.toString(), totalTime);

	// disconnect after use
	lb.disconnect();
	lbFull.disconnect();

	let lists = await redis.smembers("activeLeaderboardList");
	console.log("lists: ", lists);

	if (lists) {
		for (let l of lists) {
			const dates = l.split("_");

			if (dates.length > 1) {
				const from = moment(dates[0]);
				console.log("from: ", from);
				const to = moment(dates[1]);
				console.log("to: ", to);

				if (today.isSameOrAfter(from) && today.isSameOrBefore(to)) {
					const lb = new Leaderboard(`LeaderboardWatchTime2:${l}_${state_id}`);

					await lb.updateScore(updated?.user?.toString(), totalTime);

					// disconnect after use
					lb.disconnect();
				}
			}
		}
	}

	// console.log("🚀 ~ file: index.ts:218 ~ main7 ~ updateOrCreate:", udpate);
	return true;
};
