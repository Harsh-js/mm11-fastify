import redis from "@db/redis";
import { customError } from "@helpers/AppErr";
import apiError from "@helpers/errors";
import redisKey from "@helpers/redisKey";
import { R } from "@helpers/response-helpers";
import {
	contestsAttributes,
	contestsCreationAttributes,
} from "@models/contests";
import { fixturesAttributes } from "@models/fixtures";
import models from "@models/index";
import moment from "moment";
import {
	ContestWithFixture,
	PaymentCalcParams,
	PaymentCalcResponse,
} from "./contest";
import { users, usersAttributes } from "@models/users";
import { randomInRange } from "@helpers/common";
import Leaderboard from "@helpers/leaderboard";
import { Transaction } from "sequelize";
import { user_teamsAttributes } from "@models/user_teams";
import axios from "axios";
import env from "@config/env";

export interface CheckSpace {
	contest: contestsAttributes;
	fakeUser: any;
	spaceAvailable: number;
}

const contestService = {
	checkSpace: async (
		contestId: string,
		userTeamIds: string[],
		userId: string,
	): Promise<CheckSpace> => {
		let second_fake_attempt_key = "isSecondAttempt:" + contestId;
		let second_fake_attempt = parseInt(
			(await redis.get(second_fake_attempt_key)) || "0",
		);

		const multi = redis.multi();

		let key = redisKey.contestSpace(contestId);

		multi.get(key);
		multi.decr(key);

		let replies = await redis.execAsync(multi);

		if (!replies) {
			return R(false, "Please Try Again", null);
		}

		let spaceAvailable = parseInt(replies[0]);

		await redis.watch(key);
		let contest = await contestService.GetContestDetail(contestId);

		if (!contest) {
			return customError(apiError.invalidContest);
		}

		let fakeUser = await contestService.checkforfakeattemp(userId, contest);

		if (fakeUser) {
			redis.set(second_fake_attempt_key, 1);
		}

		if (
			!spaceAvailable ||
			spaceAvailable === null ||
			spaceAvailable < userTeamIds.length
		) {
			const remainedSlot = await contestService.getContestSpaceFromDB(
				contestId,
				contest.total_teams,
			);

			if (remainedSlot <= 0 || (second_fake_attempt && fakeUser) || !fakeUser) {
				await redis.unwatch();
				if (contest.total_teams > 10) {
					return customError(apiError._contestFull, contestId);
				} else {
					return customError(apiError.contestFull, contestId);
				}
			}
		}
		return { contest: contest.toJSON(), fakeUser, spaceAvailable };
	},
	checkBasicCondition: async (contest: ContestWithFixture) => {
		let today = moment();
		let current = moment(contest.fixture.starting_at);
		const key = redisKey.contestSpace(contest.id);

		if (
			contest.fixture.inning_number == 0 &&
			current.diff(today, "seconds") <= 0 &&
			contest.inning_number == 0
		) {
			await redis.unwatch();
			await redis.incr(key);
			return customError(apiError.MatchLive);
		}

		if (
			contest.fixture.inning_number != 0 &&
			(contest?.inning_number || 0) <= (contest?.fixture.inning_number || 0)
		) {
			await redis.unwatch();
			await redis.incr(key);
			return customError(
				apiError.inningStartedCantJoin(contest.inning_number || 0),
			);
		}

		if (
			(contest.fixture.status !== "NOT STARTED" &&
				contest.fixture.status !== "LIVE") ||
			!contest.fixture.is_active
		) {
			await redis.unwatch();
			await redis.incr(key);
			return customError(apiError.matchStartedOrCompleted);
		}

		return true;
	},

	checkTeamExists: async (
		contest: contestsAttributes,
		userTeamIds: string[],
		userId: string,
	) => {
		let userTeam = await models.user_teams.findAll({
			where: {
				id: userTeamIds,
			},
			attributes: ["id", "name"],
		});

		if (userTeam.length < userTeamIds.length || !userTeam.length) {
			return customError(apiError.diffrentInningTeam);
		}

		return userTeam;
	},

	checkJoinedCount: async (
		contest: contestsAttributes,
		userTeamIds: string[],
		userId: string,
	) => {
		/* Get count of joined contest of current user*/
		const joinedContests = await models.user_contests.count({
			where: {
				contest_id: contest.id,
				user_id: userId,
			},
		});

		const key = redisKey.contestSpace(contest.id);

		if (joinedContests + userTeamIds.length > contest.max_team) {
			redis.unwatch();
			redis.incr(key);
			return customError(apiError.canJoinMoreThan(contest.max_team));
		}

		/* Get count of joined contest by any user team id*/
		const joinedContestsByTeam = await models.user_contests.count({
			where: {
				contest_id: contest.id,
				user_team_id: userTeamIds,
				user_id: userId,
			},
		});

		if (joinedContestsByTeam > 0) {
			await redis.unwatch();
			await redis.incr(key);

			return customError(apiError.contestJoinedByYourTeam);
		}

		/* Get count of joined contest of all */
		const joined = await models.user_contests.count({
			where: {
				contest_id: contest.id,
			},
		});

		/* Validate against remaining spot */
		const remaining = contest.total_teams - joined;

		if (userTeamIds.length > remaining) {
			await redis.unwatch();
			await redis.incr(key);
			return customError(apiError.onlyJoinWithTeams(remaining));
		}

		return true;
	},
	checkUserBalance: async (
		contest: contestsAttributes,
		user: usersAttributes,
		entryFee: number,
	) => {
		const key = redisKey.contestSpace(contest.id);

		/* Get count of joined contest of current user*/
		if (
			contest.type !== "FREE" &&
			contest.type !== "PRACTICE" &&
			contest.type !== "MINI"
		) {
			if (+user.balance < entryFee) {
				await redis.unwatch();
				await redis.incr(key);

				return customError(apiError.noBalanceToJoinContest);
			}
		}

		return true;
	},
	checkUserBalanceAgain: async (
		contest: contestsAttributes,
		entryFee: number,
		discount: number,
		paymentData: PaymentCalcResponse,
	) => {
		const key = redisKey.contestSpace(contest.id);

		if (
			contest.type != "FREE" &&
			contest.type != "PRACTICE" &&
			contest.type !== "MINI"
		) {
			if (discount > 0 && contest.type === "DISCOUNT") {
				let perCentage = (entryFee * discount) / 100;
				entryFee = entryFee - perCentage;
			}
			let TotalPay =
				paymentData.wining_amount +
				paymentData.cash_bonus +
				paymentData.deposited_balance;

			if (TotalPay < entryFee) {
				redis.unwatch();
				redis.incr(key);

				return customError(apiError.noBalanceToJoinContest);
			}
		} else {
			return { cash_bonus: 0, wining_amount: 0, deposited_balance: 0 };
		}

		return paymentData;
	},
	paymentCalculation: async (
		cash_bonus: PaymentCalcParams["cash_bonus"], //user
		wining_amount: PaymentCalcParams["wining_amount"], //user
		deposited_balance: PaymentCalcParams["deposited_balance"], //user
		entry_fee: PaymentCalcParams["entry_fee"], //contest
		contestType: PaymentCalcParams["contestType"], //conteste
		discount?: PaymentCalcParams["discount"], //contest
		bonusPercentage?: PaymentCalcParams["bonusPercentage"], //contest
	) => {
		const payment = { cash_bonus: 0, wining_amount: 0, deposited_balance: 0 };
		if (!discount) {
			discount = 0;
		}

		if (!bonusPercentage) {
			bonusPercentage = 0;
		}

		if (discount > 0 && contestType === "DISCOUNT") {
			let percentage = (entry_fee * discount) / 100;
			entry_fee = entry_fee - percentage;
		}

		let cashBonusPerAmount = 0;
		if (contestType !== "PRIVATE") {
			cashBonusPerAmount = (entry_fee * bonusPercentage) / 100;
		}

		let entryFeeLeft = entry_fee;
		let bonusUsed = 0;
		//cash bonus
		if (cash_bonus != 0 && cash_bonus >= cashBonusPerAmount) {
			entryFeeLeft = entry_fee - cashBonusPerAmount;
			payment.cash_bonus = cashBonusPerAmount; //(entry_fee - entryFeeLeft);
			bonusUsed = cashBonusPerAmount;
		} else if (cash_bonus < cashBonusPerAmount) {
			entryFeeLeft = entry_fee - cash_bonus;
			payment.cash_bonus = cash_bonus;
			bonusUsed = cash_bonus;
		}

		if (bonusUsed + wining_amount + deposited_balance >= entry_fee) {
			//deposited_balance
			if (deposited_balance != 0 && entryFeeLeft != 0) {
				if (entryFeeLeft < deposited_balance) {
					payment.deposited_balance = entryFeeLeft;
					entryFeeLeft = 0;
				} else {
					entryFeeLeft = entryFeeLeft - deposited_balance;
					payment.deposited_balance = deposited_balance;
				}
			} else {
				payment.deposited_balance = 0;
			}

			//wining_amount

			if (wining_amount != 0 && entryFeeLeft != 0) {
				if (entryFeeLeft < wining_amount) {
					payment.wining_amount = entryFeeLeft;
					entryFeeLeft = 0;
				} else {
					entryFeeLeft = entryFeeLeft - wining_amount;
					payment.wining_amount = wining_amount;
				}
			} else {
				payment.wining_amount = 0;
			}

			return payment;
		} else {
			return payment;
		}
	},
	GetContestDetail: async (contestId: string, attributes = true) => {
		return await models.contests.findOne({
			where: {
				id: contestId,
				status: "LIVE",
			},
			include: [
				{
					model: models.fixtures,
					as: "fixture",
				},
			],

			...(attributes && {
				attributes: [
					"id",
					"fixture_id",
					"total_teams",
					"entry_fee",
					"max_team",
					"prize",
					"is_confirmed",
					"type",
					"discount",
					"bonus",
					"inning_number",
					"contest_category_id",
					"auto_create_on_full",
				],
			}),
		});
	},

	addTeamInLeaderboard: async (
		contest: ContestWithFixture,
		user: users,
		userTeams: Pick<user_teamsAttributes, "id" | "name">[],
		spaceAvailable: number,
		totalTeams: number,
	) => {
		const lb = new Leaderboard(redisKey.leaderboard(contest.id));

		userTeams.map((ut) => {
			lb.rankMember(
				ut.id,
				0,
				JSON.stringify({
					id: user.id,
					username: user.username,
					is_sys_user: user.is_sys_user,
					photo: user.photo,
					prevRank: 0,
					private: false,
					teamName: ut.name,
				}),
				() => {
					lb.totalMembers(async (totalJoined: any) => {
						if (parseInt(totalJoined) == totalTeams || spaceAvailable <= 0) {
							try {
								/* Update contest's attribute is_full to 1 */
								await contestService.updateContest(contest.id, { is_full: 1 });

								if (contest?.auto_create_on_full) {
									/* Auto create new contest */
									await contestService.autoCreateContestEvent(contest.id);
								}
							} catch (e: any) {
								console.error(e?.message);
							}
						}
						lb.disconnect();
					});
				},
			);
			return;
		});
		return true;
	},
	autoCreateContestEvent: async (contestId: string) => {
		const __response = await axios.post(env.larave_api, {
			type: "autoCreateContest",
			data: { contest_id: contestId },
			secret: env.larave_event_secret,
		});
		return true;
	},
	updateContest: async (contestId: string, data: object) => {
		let udpatedContest = await models.contests.update(data, {
			where: {
				id: contestId,
			},
		});
		console.log("udpatedContest: ", udpatedContest);
		return true;
	},
	checkforfakeattemp: async (user_id: string, contest: contestsAttributes) => {
		let fake_data: any = await models.settings.findOne({
			where: {
				key: "fake_user",
			},
		});

		fake_data = JSON.parse(fake_data?.value);

		if (contest.total_teams <= 2 && fake_data.is_active == 1) {
			return fake_data.user.find((f: any) => f.real_user == user_id);
		} else {
			return false;
		}
	},
	addBotforFakeUser: async (
		fake_user: any,
		contest: contestsAttributes,
		t?: Transaction,
	) => {
		const key = redisKey.contestSpace(contest.id);

		let space = parseInt((await redis.get(key)) || "0");

		if (!space && space <= 0) {
			return false;
		}

		if (!fake_user) return false;

		let system_user =
			typeof fake_user.system_user === "object"
				? fake_user.system_user[
						randomInRange(0, fake_user.system_user.length - 1)
				  ]
				: fake_user.system_user;

		let sys_user_team = await models.user_teams.findOne({
			where: {
				user_id: system_user,
				fixture_id: contest.fixture_id,
				inning_number: contest.inning_number,
			},
		});
		if (!sys_user_team) return false;

		let sys_user = await models.users.findByPk(system_user, {
			attributes: ["id", "is_sys_user", "username", "photo"],
		});

		if (!sys_user) return false;

		let newSpaceAvailable = await redis.decr(key);

		await models.user_contests.create(
			{
				fixture_id: contest.fixture_id,
				user_id: system_user,
				contest_id: contest.id,
				user_team_id: sys_user_team.id,
				//payment_data: JSON.stringify(_paymentData),
				created_at: moment().format() as any,
				inning_number: contest.inning_number,
			},
			{ ...(t && { transaction: t }) },
		);

		const _lb = new Leaderboard(redisKey.leaderboard(contest.id));
		_lb.rankMember(
			sys_user_team.id,
			0,
			JSON.stringify({
				id: sys_user.id,
				username: sys_user.username,
				is_sys_user: sys_user.is_sys_user,
				photo: sys_user.photo,
				prevRank: 0,
				private: false,
				teamName: sys_user_team.name,
			}),
			() => {
				_lb.disconnect();
			},
		);

		// await redis.set(isSecondAttemptKey, true);

		return newSpaceAvailable;
	},
	getContestSpaceFromDB: async (contestId: string, totalTeams: any) => {
		let joinedUserCount = await models.user_contests.count({
			where: {
				contest_id: contestId,
			},
		});

		let remainedSlot = parseInt(`${totalTeams}`) - joinedUserCount;

		return remainedSlot || 0;
	},
};
export default contestService;
