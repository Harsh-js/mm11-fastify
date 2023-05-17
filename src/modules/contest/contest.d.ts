import { contestsAttributes } from "@models/contests";
import { usersAttributes } from "@models/users";

export interface ContestWithFixture extends contestsAttributes {
	fixture: fixturesAttributes;
}

export interface PaymentCalcParams {
	cash_bonus: usersAttributes["cash_bonus"]; //user
	wining_amount: usersAttributes["winning_amount"]; //user
	deposited_balance: usersAttributes["deposited_balance"]; //user
	entry_fee: contestsAttributes["entry_fee"]; //contest
	contestType: contestsAttributes["type"] | "PRIVATE"; //conteste
	discount: contestsAttributes["discount"]; //contest
	bonusPercentage: contestsAttributes["bonus"]; //contest
}

export interface PaymentCalcResponse {
	cash_bonus: number;
	wining_amount: number;
	deposited_balance: number;
}
