import { customError } from "@helpers/AppErr";
import apiError from "@helpers/errors";
import otp from "@helpers/otp";
import models from "@models/index";
import { users } from "@models/users";
import {
	ContestWithFixture,
	PaymentCalcResponse,
} from "@modules/contest/contest";
import moment from "moment";
import { Transaction } from "sequelize";

const walletService = {
	test: async () => {},
	contestJoinPayment: async (
		contest: ContestWithFixture,
		userTeamCount: number,
		paymentData: PaymentCalcResponse,
		user: users,
		t?: Transaction,
	) => {
		const transactionId =
			"CJN" +
			new Date().getTime().toString() +
			otp.generate(2, {
				upperCase: true,
				digits: false,
			});

		let extraColumn = {
			fixture_name:
				contest.fixture.teama_short_name +
				" vs " +
				contest.fixture.teamb_short_name,
			entry_fee: contest.entry_fee,
			team_count: userTeamCount,
			fixture_id: contest.fixture.id,
			contest_name: "PRIVATE",
		};

		if (paymentData) {
			user.cash_bonus =
				parseFloat(`${user.cash_bonus}`) - paymentData.cash_bonus;

			user.deposited_balance =
				parseFloat(`${user.deposited_balance}`) - paymentData.deposited_balance;

			user.winning_amount =
				parseFloat(`${user.winning_amount}`) - paymentData.wining_amount;

			user.balance =
				parseFloat(`${user.balance}`) -
				(paymentData.wining_amount +
					paymentData.deposited_balance +
					paymentData.cash_bonus);

			await user.save();
		}

		if (
			contest.type !== "FREE" &&
			contest.type !== "PRACTICE" &&
			contest.type !== "MINI"
		) {
			let payment = {
				user_id: user.id,
				contest_id: contest.id,
				amount: -(
					paymentData.wining_amount +
					paymentData.deposited_balance +
					paymentData.cash_bonus
				),
				status: "SUCCESS",
				transaction_id: transactionId,
				description: "Joined a contest",
				type: "CONTEST JOIN",
				extra: {
					...extraColumn,
					wallet: {
						deposit: `${user.deposited_balance}`,
						bonus: `${user.cash_bonus}`,
						winning: `${user.winning_amount}`,
						balance: `${
							parseFloat(`${user.deposited_balance}`) +
							parseFloat(`${user.cash_bonus}`) +
							parseFloat(`${user.winning_amount}`)
						}`,
					},
				},
				created_at: moment().format() as any,
			};

			await models.payments.create(payment as any, {
				...(t && { transaction: t }),
			});
		}

		return true;
	},
};
export default walletService;
