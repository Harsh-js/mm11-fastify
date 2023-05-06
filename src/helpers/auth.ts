import Payments, {
	PaymentDesc,
	PaymentStatus,
	PaymentType,
} from "@models/Payments";
import User from "@models/User";
import bcrypt from "bcryptjs";

export const HashPassword = (password: string) => {
	return bcrypt.hashSync(password, 10);
};

export const VerifyPassword = (password: string, hash: string) => {
	if (!password) return false;
	return bcrypt.compareSync(password, hash);
};

// add user referral
export const ApplyRefCode = async (code: string, userId: string) => {
	const referral = await User.findOne({ ref_code: code });

	if (referral) {
		const user = await User.findById(userId);

		if (user) {
			referral.ref_balance = referral.ref_balance + 50;
			referral.$inc("ref_count", 1);
			referral.$inc("total_ref_balance", 50);

			user.ref_balance = user.ref_balance + 20;
			user.ref_by = referral._id;
			user.$inc("total_ref_balance", 20);

			await referral.save();
			await user.save();

			await Payments.create({
				user: referral._id,
				amount: 50,
				status: PaymentStatus.SUCCESS,
				description: PaymentDesc.REF_BONUS,
				reference: user._id,
				type: PaymentType.REF_BONUS,
			});

			await Payments.create({
				user: user._id,
				amount: 20,
				status: PaymentStatus.SUCCESS,
				description: PaymentDesc.REF_BONUS,
				reference: referral._id,
				type: PaymentType.REF_BONUS,
			});
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};
