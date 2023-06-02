import { R, asyncWrapper } from "@helpers/response-helpers";
import contestService from "./contest.service";
import models from "@models/index";
import apiError from "@helpers/errors";
import redis from "@db/redis";
import redisKey from "@helpers/redisKey";
import { ContestWithFixture } from "./contest";
import authService from "@modules/auth/auth.service";
import db from "@db/mysql";
import moment from "moment";
import { user_contestsCreationAttributes } from "@models/user_contests";
import { addUserInMatch } from "@helpers/fixture";
import walletService from "@modules/wallet/wallet.service";
import { customError } from "@helpers/AppErr";

const contestController = {
	joinMulty: asyncWrapper(async (req, res) => {
		const contestId = req.body.contest_id as string;
		const userTeamIds = req.body.user_team_id as string[];
		const userTeamCount = userTeamIds.length;

		/* Contest Space check */
		let { contest, fakeUser, spaceAvailable } = await contestService.checkSpace(
			contestId,
			userTeamIds,
			req.userId,
		);

		const totalTeams = contest.total_teams;

		/* Basic Conditions check, match live and inning numbers etc. */
		await contestService.checkBasicCondition(contest as ContestWithFixture);

		/* All Team exists check */
		const userTeam = await contestService.checkTeamExists(
			contest,
			userTeamIds,
			req.userId,
		);

		/* User Joined Team check */
		await contestService.checkJoinedCount(contest, userTeamIds, req.userId);

		let entryFee = contest.entry_fee * userTeamIds.length;

		/* User Object */
		const user = await authService.getUserById(req.userId);

		/* Check user balance */
		await contestService.checkUserBalance(contest, user, entryFee);

		try {
			let discount = contest.discount * userTeamIds.length;
			let bonus = contest.bonus;

			let paymentData = await contestService.paymentCalculation(
				parseFloat(`${user.cash_bonus}`),
				parseFloat(`${user.winning_amount}`),
				parseFloat(`${user.deposited_balance}`),
				entryFee,
				contest.type,
				discount,
				bonus,
			);

			let paymntCashBonus = paymentData.cash_bonus / userTeamCount;
			let paymntWinningAmount = paymentData.wining_amount / userTeamCount;
			let paymntDepositedBlnce = paymentData.deposited_balance / userTeamCount;

			let _paymentData = {
				cash_bonus: parseFloat(paymntCashBonus.toFixed(2)),
				wining_amount: parseFloat(paymntWinningAmount.toFixed(2)),
				deposited_balance: parseFloat(paymntDepositedBlnce.toFixed(2)),
			};

			/* Check user balance again */
			paymentData = await contestService.checkUserBalanceAgain(
				contest,
				entryFee,
				discount,
				paymentData,
			);

			await db.sequelize.transaction(async (t) => {
				const UserContestData = userTeamIds.map((id) => {
					return {
						fixture_id: (contest as ContestWithFixture).fixture.id,
						user_id: req.userId,
						contest_id: contestId,
						user_team_id: id,
						payment_data: JSON.stringify(_paymentData),
						created_at: moment().format(),
						inning_number: contest.inning_number,
					};
				});

				await models.user_contests.bulkCreate(UserContestData as any, {
					transaction: t,
				});

				await addUserInMatch(
					(contest as ContestWithFixture).fixture.id,
					req.userId,
					"contests",
					UserContestData.length,
					contestId,
				);

				if (fakeUser && spaceAvailable > 0) {
					let newSpaceAvailable = await contestService.addBotforFakeUser(
						fakeUser,
						contest,
						t,
					);
					if (newSpaceAvailable) {
						spaceAvailable = newSpaceAvailable;
					}
				}

				await walletService.contestJoinPayment(
					contest as ContestWithFixture,
					userTeamCount,
					paymentData,
					user,
					t,
				);
				return true;
			});

			await contestService.addTeamInLeaderboard(
				contest as ContestWithFixture,
				user,
				userTeam,
				spaceAvailable,
				totalTeams,
			);
		} catch (err: any) {
			console.error(err);
			redis.incr(redisKey.contestSpace(contestId));
			return customError(err.message);
		}

		redis.sadd(redisKey.fixtureReminder(contest.fixture_id), req.userId);

		redis.unwatch();

		return R(true, "Contest joined.", null);
	}),
	joinMultyContestPerUser: asyncWrapper(async (req, res) => {
		const contestId = req.body.contest_id as string;
		const userTeamIds = [req.body.user_team_id] as string[];
		const userTeamCount = userTeamIds.length;
		const count = req.body.count as number;

		/* Contest Space check */
		let { contest, fakeUser, spaceAvailable } = await contestService.checkSpace(
			contestId,
			userTeamIds,
			req.userId,
		);

		const totalTeams = contest.total_teams;

		/* Basic Conditions check, match live and inning numbers etc. */
		await contestService.checkBasicCondition(contest as ContestWithFixture);

		/* All Team exists check */
		const userTeam = await contestService.checkTeamExists(
			contest,
			userTeamIds,
			req.userId,
		);

		/* User Joined Team check */
		await contestService.checkJoinedCount(contest, userTeamIds, req.userId);

		let entryFee = contest.entry_fee * userTeamIds.length;

		/* User Object */
		const user = await authService.getUserById(req.userId);

		/* Check user balance */
		await contestService.checkUserBalance(contest, user, entryFee);

		try {
			let discount = contest.discount * userTeamIds.length;
			let bonus = contest.bonus;

			let paymentData = await contestService.paymentCalculation(
				parseFloat(`${user.cash_bonus}`),
				parseFloat(`${user.winning_amount}`),
				parseFloat(`${user.deposited_balance}`),
				entryFee,
				contest.type,
				discount,
				bonus,
			);

			let paymntCashBonus = paymentData.cash_bonus / userTeamCount;
			let paymntWinningAmount = paymentData.wining_amount / userTeamCount;
			let paymntDepositedBlnce = paymentData.deposited_balance / userTeamCount;

			let _paymentData = {
				cash_bonus: parseFloat(paymntCashBonus.toFixed(2)),
				wining_amount: parseFloat(paymntWinningAmount.toFixed(2)),
				deposited_balance: parseFloat(paymntDepositedBlnce.toFixed(2)),
			};

			/* Check user balance again */
			paymentData = await contestService.checkUserBalanceAgain(
				contest,
				entryFee,
				discount,
				paymentData,
			);

			await db.sequelize.transaction(async (t) => {
				const UserContestData = userTeamIds.map((id) => {
					return {
						fixture_id: (contest as ContestWithFixture).fixture.id,
						user_id: req.userId,
						contest_id: contestId,
						user_team_id: id,
						payment_data: JSON.stringify(_paymentData),
						created_at: moment().format(),
						inning_number: contest.inning_number,
					};
				});

				await models.user_contests.bulkCreate(UserContestData as any, {
					transaction: t,
				});

				await addUserInMatch(
					(contest as ContestWithFixture).fixture.id,
					req.userId,
					"contests",
					UserContestData.length,
					contestId,
				);

				if (fakeUser && spaceAvailable > 0) {
					let newSpaceAvailable = await contestService.addBotforFakeUser(
						fakeUser,
						contest,
						t,
					);
					if (newSpaceAvailable) {
						spaceAvailable = newSpaceAvailable;
					}
				}

				await walletService.contestJoinPayment(
					contest as ContestWithFixture,
					userTeamCount,
					paymentData,
					user,
					t,
				);
				return true;
			});

			await contestService.addTeamInLeaderboard(
				contest as ContestWithFixture,
				user,
				userTeam,
				spaceAvailable,
				totalTeams,
			);
		} catch (err: any) {
			console.error(err);
			redis.incr(redisKey.contestSpace(contestId));
			return customError(err.message);
		}

		redis.sadd(redisKey.fixtureReminder(contest.fixture_id), req.userId);

		redis.unwatch();

		return R(true, "Contest joined.", null);
	}),
};
export default contestController;
