import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { adhaar, adhaarId } from './adhaar';
import type { bank_accounts, bank_accountsId } from './bank_accounts';
import type { bkb_private_contests, bkb_private_contestsId } from './bkb_private_contests';
import type { bkb_user_contests, bkb_user_contestsId } from './bkb_user_contests';
import type { bkb_user_private_contests, bkb_user_private_contestsId } from './bkb_user_private_contests';
import type { bkb_user_teams, bkb_user_teamsId } from './bkb_user_teams';
import type { bsb_private_contests, bsb_private_contestsId } from './bsb_private_contests';
import type { bsb_user_contests, bsb_user_contestsId } from './bsb_user_contests';
import type { bsb_user_private_contests, bsb_user_private_contestsId } from './bsb_user_private_contests';
import type { bsb_user_teams, bsb_user_teamsId } from './bsb_user_teams';
import type { ftb_leaderboards, ftb_leaderboardsId } from './ftb_leaderboards';
import type { ftb_private_contests, ftb_private_contestsId } from './ftb_private_contests';
import type { ftb_user_contests, ftb_user_contestsId } from './ftb_user_contests';
import type { ftb_user_private_contests, ftb_user_private_contestsId } from './ftb_user_private_contests';
import type { ftb_user_teams, ftb_user_teamsId } from './ftb_user_teams';
import type { hky_private_contests, hky_private_contestsId } from './hky_private_contests';
import type { hky_user_contests, hky_user_contestsId } from './hky_user_contests';
import type { hky_user_private_contests, hky_user_private_contestsId } from './hky_user_private_contests';
import type { hky_user_teams, hky_user_teamsId } from './hky_user_teams';
import type { investment_leaderboard, investment_leaderboardId } from './investment_leaderboard';
import type { investment_leaderboards, investment_leaderboardsId } from './investment_leaderboards';
import type { kbd_leaderboards, kbd_leaderboardsId } from './kbd_leaderboards';
import type { kbd_user_private_contests, kbd_user_private_contestsId } from './kbd_user_private_contests';
import type { kbd_user_teams, kbd_user_teamsId } from './kbd_user_teams';
import type { leaderboard_influencer, leaderboard_influencerId } from './leaderboard_influencer';
import type { leaderboards, leaderboardsId } from './leaderboards';
import type { pan_cards, pan_cardsId } from './pan_cards';
import type { payments, paymentsId } from './payments';
import type { private_contests, private_contestsId } from './private_contests';
import type { referal_amount_details, referal_amount_detailsId } from './referal_amount_details';
import type { referal_deposit_details, referal_deposit_detailsId } from './referal_deposit_details';
import type { states, statesId } from './states';
import type { tds, tdsId } from './tds';
import type { user_contests, user_contestsId } from './user_contests';
import type { user_private_contests, user_private_contestsId } from './user_private_contests';
import type { user_teams, user_teamsId } from './user_teams';

export interface usersAttributes {
  id: string;
  name?: string;
  username?: string;
  email: string;
  password?: string;
  date_of_birth?: string;
  photo?: string;
  gender?: string;
  phone?: string;
  address?: string;
  city?: string;
  state_id?: number;
  balance: number;
  is_mini: number;
  admin_time_change?: number;
  winning_amount: number;
  deposited_balance: number;
  cash_bonus: number;
  winning_points?: number;
  phone_verified: number;
  document_verified: number;
  profile_verified: number;
  email_verified: number;
  aadhaar_verified?: number;
  is_locked: number;
  is_username_update: number;
  can_played: number;
  referral_code: string;
  referral_bonus?: number;
  referral_amount: number;
  referral_id?: string;
  is_deposit: number;
  referral_pending_amount: number;
  refered_by_upper_level?: string;
  role: 'admin' | 'user' | 'h2h';
  remember_token?: string;
  verification_code?: string;
  bank_update_count: number;
  adhaar_update_count: number;
  level: number;
  fcm_token?: string;
  promoter_type: number;
  influncer_commission: number;
  influncer_referal_bonus?: number;
  app_version?: string;
  is_sys_user: number;
  influncer_user: number;
  influncer_created_at?: Date;
  old_user_id: number;
  created_at?: Date;
  updated_at?: Date;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "name" | "username" | "password" | "date_of_birth" | "photo" | "gender" | "phone" | "address" | "city" | "state_id" | "balance" | "is_mini" | "admin_time_change" | "winning_amount" | "deposited_balance" | "cash_bonus" | "winning_points" | "phone_verified" | "document_verified" | "profile_verified" | "email_verified" | "aadhaar_verified" | "is_locked" | "is_username_update" | "can_played" | "referral_bonus" | "referral_amount" | "referral_id" | "is_deposit" | "referral_pending_amount" | "refered_by_upper_level" | "role" | "remember_token" | "verification_code" | "bank_update_count" | "adhaar_update_count" | "level" | "fcm_token" | "promoter_type" | "influncer_commission" | "influncer_referal_bonus" | "app_version" | "is_sys_user" | "influncer_user" | "influncer_created_at" | "old_user_id" | "created_at" | "updated_at";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: string;
  name?: string;
  username?: string;
  email!: string;
  password?: string;
  date_of_birth?: string;
  photo?: string;
  gender?: string;
  phone?: string;
  address?: string;
  city?: string;
  state_id?: number;
  balance!: number;
  is_mini!: number;
  admin_time_change?: number;
  winning_amount!: number;
  deposited_balance!: number;
  cash_bonus!: number;
  winning_points?: number;
  phone_verified!: number;
  document_verified!: number;
  profile_verified!: number;
  email_verified!: number;
  aadhaar_verified?: number;
  is_locked!: number;
  is_username_update!: number;
  can_played!: number;
  referral_code!: string;
  referral_bonus?: number;
  referral_amount!: number;
  referral_id?: string;
  is_deposit!: number;
  referral_pending_amount!: number;
  refered_by_upper_level?: string;
  role!: 'admin' | 'user' | 'h2h';
  remember_token?: string;
  verification_code?: string;
  bank_update_count!: number;
  adhaar_update_count!: number;
  level!: number;
  fcm_token?: string;
  promoter_type!: number;
  influncer_commission!: number;
  influncer_referal_bonus?: number;
  app_version?: string;
  is_sys_user!: number;
  influncer_user!: number;
  influncer_created_at?: Date;
  old_user_id!: number;
  created_at?: Date;
  updated_at?: Date;

  // users belongsTo states via state_id
  state!: states;
  getState!: Sequelize.BelongsToGetAssociationMixin<states>;
  setState!: Sequelize.BelongsToSetAssociationMixin<states, statesId>;
  createState!: Sequelize.BelongsToCreateAssociationMixin<states>;
  // users hasMany adhaar via user_id
  adhaars!: adhaar[];
  getAdhaars!: Sequelize.HasManyGetAssociationsMixin<adhaar>;
  setAdhaars!: Sequelize.HasManySetAssociationsMixin<adhaar, adhaarId>;
  addAdhaar!: Sequelize.HasManyAddAssociationMixin<adhaar, adhaarId>;
  addAdhaars!: Sequelize.HasManyAddAssociationsMixin<adhaar, adhaarId>;
  createAdhaar!: Sequelize.HasManyCreateAssociationMixin<adhaar>;
  removeAdhaar!: Sequelize.HasManyRemoveAssociationMixin<adhaar, adhaarId>;
  removeAdhaars!: Sequelize.HasManyRemoveAssociationsMixin<adhaar, adhaarId>;
  hasAdhaar!: Sequelize.HasManyHasAssociationMixin<adhaar, adhaarId>;
  hasAdhaars!: Sequelize.HasManyHasAssociationsMixin<adhaar, adhaarId>;
  countAdhaars!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bank_accounts via user_id
  bank_accounts!: bank_accounts[];
  getBank_accounts!: Sequelize.HasManyGetAssociationsMixin<bank_accounts>;
  setBank_accounts!: Sequelize.HasManySetAssociationsMixin<bank_accounts, bank_accountsId>;
  addBank_account!: Sequelize.HasManyAddAssociationMixin<bank_accounts, bank_accountsId>;
  addBank_accounts!: Sequelize.HasManyAddAssociationsMixin<bank_accounts, bank_accountsId>;
  createBank_account!: Sequelize.HasManyCreateAssociationMixin<bank_accounts>;
  removeBank_account!: Sequelize.HasManyRemoveAssociationMixin<bank_accounts, bank_accountsId>;
  removeBank_accounts!: Sequelize.HasManyRemoveAssociationsMixin<bank_accounts, bank_accountsId>;
  hasBank_account!: Sequelize.HasManyHasAssociationMixin<bank_accounts, bank_accountsId>;
  hasBank_accounts!: Sequelize.HasManyHasAssociationsMixin<bank_accounts, bank_accountsId>;
  countBank_accounts!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bkb_private_contests via user_id
  bkb_private_contests!: bkb_private_contests[];
  getBkb_private_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_private_contests>;
  setBkb_private_contests!: Sequelize.HasManySetAssociationsMixin<bkb_private_contests, bkb_private_contestsId>;
  addBkb_private_contest!: Sequelize.HasManyAddAssociationMixin<bkb_private_contests, bkb_private_contestsId>;
  addBkb_private_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_private_contests, bkb_private_contestsId>;
  createBkb_private_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_private_contests>;
  removeBkb_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_private_contests, bkb_private_contestsId>;
  removeBkb_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_private_contests, bkb_private_contestsId>;
  hasBkb_private_contest!: Sequelize.HasManyHasAssociationMixin<bkb_private_contests, bkb_private_contestsId>;
  hasBkb_private_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_private_contests, bkb_private_contestsId>;
  countBkb_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bkb_user_contests via user_id
  bkb_user_contests!: bkb_user_contests[];
  getBkb_user_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_user_contests>;
  setBkb_user_contests!: Sequelize.HasManySetAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  addBkb_user_contest!: Sequelize.HasManyAddAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  addBkb_user_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  createBkb_user_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_user_contests>;
  removeBkb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  removeBkb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  hasBkb_user_contest!: Sequelize.HasManyHasAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  hasBkb_user_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  countBkb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bkb_user_private_contests via user_id
  bkb_user_private_contests!: bkb_user_private_contests[];
  getBkb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_user_private_contests>;
  setBkb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  addBkb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  addBkb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  createBkb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_user_private_contests>;
  removeBkb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  removeBkb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  hasBkb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  hasBkb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  countBkb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bkb_user_teams via user_id
  bkb_user_teams!: bkb_user_teams[];
  getBkb_user_teams!: Sequelize.HasManyGetAssociationsMixin<bkb_user_teams>;
  setBkb_user_teams!: Sequelize.HasManySetAssociationsMixin<bkb_user_teams, bkb_user_teamsId>;
  addBkb_user_team!: Sequelize.HasManyAddAssociationMixin<bkb_user_teams, bkb_user_teamsId>;
  addBkb_user_teams!: Sequelize.HasManyAddAssociationsMixin<bkb_user_teams, bkb_user_teamsId>;
  createBkb_user_team!: Sequelize.HasManyCreateAssociationMixin<bkb_user_teams>;
  removeBkb_user_team!: Sequelize.HasManyRemoveAssociationMixin<bkb_user_teams, bkb_user_teamsId>;
  removeBkb_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<bkb_user_teams, bkb_user_teamsId>;
  hasBkb_user_team!: Sequelize.HasManyHasAssociationMixin<bkb_user_teams, bkb_user_teamsId>;
  hasBkb_user_teams!: Sequelize.HasManyHasAssociationsMixin<bkb_user_teams, bkb_user_teamsId>;
  countBkb_user_teams!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bsb_private_contests via user_id
  bsb_private_contests!: bsb_private_contests[];
  getBsb_private_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_private_contests>;
  setBsb_private_contests!: Sequelize.HasManySetAssociationsMixin<bsb_private_contests, bsb_private_contestsId>;
  addBsb_private_contest!: Sequelize.HasManyAddAssociationMixin<bsb_private_contests, bsb_private_contestsId>;
  addBsb_private_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_private_contests, bsb_private_contestsId>;
  createBsb_private_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_private_contests>;
  removeBsb_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_private_contests, bsb_private_contestsId>;
  removeBsb_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_private_contests, bsb_private_contestsId>;
  hasBsb_private_contest!: Sequelize.HasManyHasAssociationMixin<bsb_private_contests, bsb_private_contestsId>;
  hasBsb_private_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_private_contests, bsb_private_contestsId>;
  countBsb_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bsb_user_contests via user_id
  bsb_user_contests!: bsb_user_contests[];
  getBsb_user_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_user_contests>;
  setBsb_user_contests!: Sequelize.HasManySetAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  addBsb_user_contest!: Sequelize.HasManyAddAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  addBsb_user_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  createBsb_user_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_user_contests>;
  removeBsb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  removeBsb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  hasBsb_user_contest!: Sequelize.HasManyHasAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  hasBsb_user_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  countBsb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bsb_user_private_contests via user_id
  bsb_user_private_contests!: bsb_user_private_contests[];
  getBsb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_user_private_contests>;
  setBsb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  addBsb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  addBsb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  createBsb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_user_private_contests>;
  removeBsb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  removeBsb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  hasBsb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  hasBsb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  countBsb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany bsb_user_teams via user_id
  bsb_user_teams!: bsb_user_teams[];
  getBsb_user_teams!: Sequelize.HasManyGetAssociationsMixin<bsb_user_teams>;
  setBsb_user_teams!: Sequelize.HasManySetAssociationsMixin<bsb_user_teams, bsb_user_teamsId>;
  addBsb_user_team!: Sequelize.HasManyAddAssociationMixin<bsb_user_teams, bsb_user_teamsId>;
  addBsb_user_teams!: Sequelize.HasManyAddAssociationsMixin<bsb_user_teams, bsb_user_teamsId>;
  createBsb_user_team!: Sequelize.HasManyCreateAssociationMixin<bsb_user_teams>;
  removeBsb_user_team!: Sequelize.HasManyRemoveAssociationMixin<bsb_user_teams, bsb_user_teamsId>;
  removeBsb_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<bsb_user_teams, bsb_user_teamsId>;
  hasBsb_user_team!: Sequelize.HasManyHasAssociationMixin<bsb_user_teams, bsb_user_teamsId>;
  hasBsb_user_teams!: Sequelize.HasManyHasAssociationsMixin<bsb_user_teams, bsb_user_teamsId>;
  countBsb_user_teams!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany ftb_leaderboards via user_id
  ftb_leaderboards!: ftb_leaderboards[];
  getFtb_leaderboards!: Sequelize.HasManyGetAssociationsMixin<ftb_leaderboards>;
  setFtb_leaderboards!: Sequelize.HasManySetAssociationsMixin<ftb_leaderboards, ftb_leaderboardsId>;
  addFtb_leaderboard!: Sequelize.HasManyAddAssociationMixin<ftb_leaderboards, ftb_leaderboardsId>;
  addFtb_leaderboards!: Sequelize.HasManyAddAssociationsMixin<ftb_leaderboards, ftb_leaderboardsId>;
  createFtb_leaderboard!: Sequelize.HasManyCreateAssociationMixin<ftb_leaderboards>;
  removeFtb_leaderboard!: Sequelize.HasManyRemoveAssociationMixin<ftb_leaderboards, ftb_leaderboardsId>;
  removeFtb_leaderboards!: Sequelize.HasManyRemoveAssociationsMixin<ftb_leaderboards, ftb_leaderboardsId>;
  hasFtb_leaderboard!: Sequelize.HasManyHasAssociationMixin<ftb_leaderboards, ftb_leaderboardsId>;
  hasFtb_leaderboards!: Sequelize.HasManyHasAssociationsMixin<ftb_leaderboards, ftb_leaderboardsId>;
  countFtb_leaderboards!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany ftb_private_contests via user_id
  ftb_private_contests!: ftb_private_contests[];
  getFtb_private_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_private_contests>;
  setFtb_private_contests!: Sequelize.HasManySetAssociationsMixin<ftb_private_contests, ftb_private_contestsId>;
  addFtb_private_contest!: Sequelize.HasManyAddAssociationMixin<ftb_private_contests, ftb_private_contestsId>;
  addFtb_private_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_private_contests, ftb_private_contestsId>;
  createFtb_private_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_private_contests>;
  removeFtb_private_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_private_contests, ftb_private_contestsId>;
  removeFtb_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_private_contests, ftb_private_contestsId>;
  hasFtb_private_contest!: Sequelize.HasManyHasAssociationMixin<ftb_private_contests, ftb_private_contestsId>;
  hasFtb_private_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_private_contests, ftb_private_contestsId>;
  countFtb_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany ftb_user_contests via user_id
  ftb_user_contests!: ftb_user_contests[];
  getFtb_user_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_user_contests>;
  setFtb_user_contests!: Sequelize.HasManySetAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  addFtb_user_contest!: Sequelize.HasManyAddAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  addFtb_user_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  createFtb_user_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_user_contests>;
  removeFtb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  removeFtb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  hasFtb_user_contest!: Sequelize.HasManyHasAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  hasFtb_user_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  countFtb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany ftb_user_private_contests via user_id
  ftb_user_private_contests!: ftb_user_private_contests[];
  getFtb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_user_private_contests>;
  setFtb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  addFtb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  addFtb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  createFtb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_user_private_contests>;
  removeFtb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  removeFtb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  hasFtb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  hasFtb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  countFtb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany ftb_user_teams via user_id
  ftb_user_teams!: ftb_user_teams[];
  getFtb_user_teams!: Sequelize.HasManyGetAssociationsMixin<ftb_user_teams>;
  setFtb_user_teams!: Sequelize.HasManySetAssociationsMixin<ftb_user_teams, ftb_user_teamsId>;
  addFtb_user_team!: Sequelize.HasManyAddAssociationMixin<ftb_user_teams, ftb_user_teamsId>;
  addFtb_user_teams!: Sequelize.HasManyAddAssociationsMixin<ftb_user_teams, ftb_user_teamsId>;
  createFtb_user_team!: Sequelize.HasManyCreateAssociationMixin<ftb_user_teams>;
  removeFtb_user_team!: Sequelize.HasManyRemoveAssociationMixin<ftb_user_teams, ftb_user_teamsId>;
  removeFtb_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<ftb_user_teams, ftb_user_teamsId>;
  hasFtb_user_team!: Sequelize.HasManyHasAssociationMixin<ftb_user_teams, ftb_user_teamsId>;
  hasFtb_user_teams!: Sequelize.HasManyHasAssociationsMixin<ftb_user_teams, ftb_user_teamsId>;
  countFtb_user_teams!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany hky_private_contests via user_id
  hky_private_contests!: hky_private_contests[];
  getHky_private_contests!: Sequelize.HasManyGetAssociationsMixin<hky_private_contests>;
  setHky_private_contests!: Sequelize.HasManySetAssociationsMixin<hky_private_contests, hky_private_contestsId>;
  addHky_private_contest!: Sequelize.HasManyAddAssociationMixin<hky_private_contests, hky_private_contestsId>;
  addHky_private_contests!: Sequelize.HasManyAddAssociationsMixin<hky_private_contests, hky_private_contestsId>;
  createHky_private_contest!: Sequelize.HasManyCreateAssociationMixin<hky_private_contests>;
  removeHky_private_contest!: Sequelize.HasManyRemoveAssociationMixin<hky_private_contests, hky_private_contestsId>;
  removeHky_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<hky_private_contests, hky_private_contestsId>;
  hasHky_private_contest!: Sequelize.HasManyHasAssociationMixin<hky_private_contests, hky_private_contestsId>;
  hasHky_private_contests!: Sequelize.HasManyHasAssociationsMixin<hky_private_contests, hky_private_contestsId>;
  countHky_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany hky_user_contests via user_id
  hky_user_contests!: hky_user_contests[];
  getHky_user_contests!: Sequelize.HasManyGetAssociationsMixin<hky_user_contests>;
  setHky_user_contests!: Sequelize.HasManySetAssociationsMixin<hky_user_contests, hky_user_contestsId>;
  addHky_user_contest!: Sequelize.HasManyAddAssociationMixin<hky_user_contests, hky_user_contestsId>;
  addHky_user_contests!: Sequelize.HasManyAddAssociationsMixin<hky_user_contests, hky_user_contestsId>;
  createHky_user_contest!: Sequelize.HasManyCreateAssociationMixin<hky_user_contests>;
  removeHky_user_contest!: Sequelize.HasManyRemoveAssociationMixin<hky_user_contests, hky_user_contestsId>;
  removeHky_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<hky_user_contests, hky_user_contestsId>;
  hasHky_user_contest!: Sequelize.HasManyHasAssociationMixin<hky_user_contests, hky_user_contestsId>;
  hasHky_user_contests!: Sequelize.HasManyHasAssociationsMixin<hky_user_contests, hky_user_contestsId>;
  countHky_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany hky_user_private_contests via user_id
  hky_user_private_contests!: hky_user_private_contests[];
  getHky_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<hky_user_private_contests>;
  setHky_user_private_contests!: Sequelize.HasManySetAssociationsMixin<hky_user_private_contests, hky_user_private_contestsId>;
  addHky_user_private_contest!: Sequelize.HasManyAddAssociationMixin<hky_user_private_contests, hky_user_private_contestsId>;
  addHky_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<hky_user_private_contests, hky_user_private_contestsId>;
  createHky_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<hky_user_private_contests>;
  removeHky_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<hky_user_private_contests, hky_user_private_contestsId>;
  removeHky_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<hky_user_private_contests, hky_user_private_contestsId>;
  hasHky_user_private_contest!: Sequelize.HasManyHasAssociationMixin<hky_user_private_contests, hky_user_private_contestsId>;
  hasHky_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<hky_user_private_contests, hky_user_private_contestsId>;
  countHky_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany hky_user_teams via user_id
  hky_user_teams!: hky_user_teams[];
  getHky_user_teams!: Sequelize.HasManyGetAssociationsMixin<hky_user_teams>;
  setHky_user_teams!: Sequelize.HasManySetAssociationsMixin<hky_user_teams, hky_user_teamsId>;
  addHky_user_team!: Sequelize.HasManyAddAssociationMixin<hky_user_teams, hky_user_teamsId>;
  addHky_user_teams!: Sequelize.HasManyAddAssociationsMixin<hky_user_teams, hky_user_teamsId>;
  createHky_user_team!: Sequelize.HasManyCreateAssociationMixin<hky_user_teams>;
  removeHky_user_team!: Sequelize.HasManyRemoveAssociationMixin<hky_user_teams, hky_user_teamsId>;
  removeHky_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<hky_user_teams, hky_user_teamsId>;
  hasHky_user_team!: Sequelize.HasManyHasAssociationMixin<hky_user_teams, hky_user_teamsId>;
  hasHky_user_teams!: Sequelize.HasManyHasAssociationsMixin<hky_user_teams, hky_user_teamsId>;
  countHky_user_teams!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany investment_leaderboard via user_id
  investment_leaderboards!: investment_leaderboard[];
  getInvestment_leaderboards!: Sequelize.HasManyGetAssociationsMixin<investment_leaderboard>;
  setInvestment_leaderboards!: Sequelize.HasManySetAssociationsMixin<investment_leaderboard, investment_leaderboardId>;
  addInvestment_leaderboard!: Sequelize.HasManyAddAssociationMixin<investment_leaderboard, investment_leaderboardId>;
  addInvestment_leaderboards!: Sequelize.HasManyAddAssociationsMixin<investment_leaderboard, investment_leaderboardId>;
  createInvestment_leaderboard!: Sequelize.HasManyCreateAssociationMixin<investment_leaderboard>;
  removeInvestment_leaderboard!: Sequelize.HasManyRemoveAssociationMixin<investment_leaderboard, investment_leaderboardId>;
  removeInvestment_leaderboards!: Sequelize.HasManyRemoveAssociationsMixin<investment_leaderboard, investment_leaderboardId>;
  hasInvestment_leaderboard!: Sequelize.HasManyHasAssociationMixin<investment_leaderboard, investment_leaderboardId>;
  hasInvestment_leaderboards!: Sequelize.HasManyHasAssociationsMixin<investment_leaderboard, investment_leaderboardId>;
  countInvestment_leaderboards!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany investment_leaderboards via user_id
  user_investment_leaderboards!: investment_leaderboards[];
  getUser_investment_leaderboards!: Sequelize.HasManyGetAssociationsMixin<investment_leaderboards>;
  setUser_investment_leaderboards!: Sequelize.HasManySetAssociationsMixin<investment_leaderboards, investment_leaderboardsId>;
  addUser_investment_leaderboard!: Sequelize.HasManyAddAssociationMixin<investment_leaderboards, investment_leaderboardsId>;
  addUser_investment_leaderboards!: Sequelize.HasManyAddAssociationsMixin<investment_leaderboards, investment_leaderboardsId>;
  createUser_investment_leaderboard!: Sequelize.HasManyCreateAssociationMixin<investment_leaderboards>;
  removeUser_investment_leaderboard!: Sequelize.HasManyRemoveAssociationMixin<investment_leaderboards, investment_leaderboardsId>;
  removeUser_investment_leaderboards!: Sequelize.HasManyRemoveAssociationsMixin<investment_leaderboards, investment_leaderboardsId>;
  hasUser_investment_leaderboard!: Sequelize.HasManyHasAssociationMixin<investment_leaderboards, investment_leaderboardsId>;
  hasUser_investment_leaderboards!: Sequelize.HasManyHasAssociationsMixin<investment_leaderboards, investment_leaderboardsId>;
  countUser_investment_leaderboards!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany kbd_leaderboards via user_id
  kbd_leaderboards!: kbd_leaderboards[];
  getKbd_leaderboards!: Sequelize.HasManyGetAssociationsMixin<kbd_leaderboards>;
  setKbd_leaderboards!: Sequelize.HasManySetAssociationsMixin<kbd_leaderboards, kbd_leaderboardsId>;
  addKbd_leaderboard!: Sequelize.HasManyAddAssociationMixin<kbd_leaderboards, kbd_leaderboardsId>;
  addKbd_leaderboards!: Sequelize.HasManyAddAssociationsMixin<kbd_leaderboards, kbd_leaderboardsId>;
  createKbd_leaderboard!: Sequelize.HasManyCreateAssociationMixin<kbd_leaderboards>;
  removeKbd_leaderboard!: Sequelize.HasManyRemoveAssociationMixin<kbd_leaderboards, kbd_leaderboardsId>;
  removeKbd_leaderboards!: Sequelize.HasManyRemoveAssociationsMixin<kbd_leaderboards, kbd_leaderboardsId>;
  hasKbd_leaderboard!: Sequelize.HasManyHasAssociationMixin<kbd_leaderboards, kbd_leaderboardsId>;
  hasKbd_leaderboards!: Sequelize.HasManyHasAssociationsMixin<kbd_leaderboards, kbd_leaderboardsId>;
  countKbd_leaderboards!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany kbd_user_private_contests via user_id
  kbd_user_private_contests!: kbd_user_private_contests[];
  getKbd_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<kbd_user_private_contests>;
  setKbd_user_private_contests!: Sequelize.HasManySetAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  addKbd_user_private_contest!: Sequelize.HasManyAddAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  addKbd_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  createKbd_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<kbd_user_private_contests>;
  removeKbd_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  removeKbd_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  hasKbd_user_private_contest!: Sequelize.HasManyHasAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  hasKbd_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  countKbd_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany kbd_user_teams via user_id
  kbd_user_teams!: kbd_user_teams[];
  getKbd_user_teams!: Sequelize.HasManyGetAssociationsMixin<kbd_user_teams>;
  setKbd_user_teams!: Sequelize.HasManySetAssociationsMixin<kbd_user_teams, kbd_user_teamsId>;
  addKbd_user_team!: Sequelize.HasManyAddAssociationMixin<kbd_user_teams, kbd_user_teamsId>;
  addKbd_user_teams!: Sequelize.HasManyAddAssociationsMixin<kbd_user_teams, kbd_user_teamsId>;
  createKbd_user_team!: Sequelize.HasManyCreateAssociationMixin<kbd_user_teams>;
  removeKbd_user_team!: Sequelize.HasManyRemoveAssociationMixin<kbd_user_teams, kbd_user_teamsId>;
  removeKbd_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<kbd_user_teams, kbd_user_teamsId>;
  hasKbd_user_team!: Sequelize.HasManyHasAssociationMixin<kbd_user_teams, kbd_user_teamsId>;
  hasKbd_user_teams!: Sequelize.HasManyHasAssociationsMixin<kbd_user_teams, kbd_user_teamsId>;
  countKbd_user_teams!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany leaderboard_influencer via user_id
  leaderboard_influencers!: leaderboard_influencer[];
  getLeaderboard_influencers!: Sequelize.HasManyGetAssociationsMixin<leaderboard_influencer>;
  setLeaderboard_influencers!: Sequelize.HasManySetAssociationsMixin<leaderboard_influencer, leaderboard_influencerId>;
  addLeaderboard_influencer!: Sequelize.HasManyAddAssociationMixin<leaderboard_influencer, leaderboard_influencerId>;
  addLeaderboard_influencers!: Sequelize.HasManyAddAssociationsMixin<leaderboard_influencer, leaderboard_influencerId>;
  createLeaderboard_influencer!: Sequelize.HasManyCreateAssociationMixin<leaderboard_influencer>;
  removeLeaderboard_influencer!: Sequelize.HasManyRemoveAssociationMixin<leaderboard_influencer, leaderboard_influencerId>;
  removeLeaderboard_influencers!: Sequelize.HasManyRemoveAssociationsMixin<leaderboard_influencer, leaderboard_influencerId>;
  hasLeaderboard_influencer!: Sequelize.HasManyHasAssociationMixin<leaderboard_influencer, leaderboard_influencerId>;
  hasLeaderboard_influencers!: Sequelize.HasManyHasAssociationsMixin<leaderboard_influencer, leaderboard_influencerId>;
  countLeaderboard_influencers!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany leaderboards via user_id
  leaderboards!: leaderboards[];
  getLeaderboards!: Sequelize.HasManyGetAssociationsMixin<leaderboards>;
  setLeaderboards!: Sequelize.HasManySetAssociationsMixin<leaderboards, leaderboardsId>;
  addLeaderboard!: Sequelize.HasManyAddAssociationMixin<leaderboards, leaderboardsId>;
  addLeaderboards!: Sequelize.HasManyAddAssociationsMixin<leaderboards, leaderboardsId>;
  createLeaderboard!: Sequelize.HasManyCreateAssociationMixin<leaderboards>;
  removeLeaderboard!: Sequelize.HasManyRemoveAssociationMixin<leaderboards, leaderboardsId>;
  removeLeaderboards!: Sequelize.HasManyRemoveAssociationsMixin<leaderboards, leaderboardsId>;
  hasLeaderboard!: Sequelize.HasManyHasAssociationMixin<leaderboards, leaderboardsId>;
  hasLeaderboards!: Sequelize.HasManyHasAssociationsMixin<leaderboards, leaderboardsId>;
  countLeaderboards!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany pan_cards via user_id
  pan_cards!: pan_cards[];
  getPan_cards!: Sequelize.HasManyGetAssociationsMixin<pan_cards>;
  setPan_cards!: Sequelize.HasManySetAssociationsMixin<pan_cards, pan_cardsId>;
  addPan_card!: Sequelize.HasManyAddAssociationMixin<pan_cards, pan_cardsId>;
  addPan_cards!: Sequelize.HasManyAddAssociationsMixin<pan_cards, pan_cardsId>;
  createPan_card!: Sequelize.HasManyCreateAssociationMixin<pan_cards>;
  removePan_card!: Sequelize.HasManyRemoveAssociationMixin<pan_cards, pan_cardsId>;
  removePan_cards!: Sequelize.HasManyRemoveAssociationsMixin<pan_cards, pan_cardsId>;
  hasPan_card!: Sequelize.HasManyHasAssociationMixin<pan_cards, pan_cardsId>;
  hasPan_cards!: Sequelize.HasManyHasAssociationsMixin<pan_cards, pan_cardsId>;
  countPan_cards!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany payments via user_id
  payments!: payments[];
  getPayments!: Sequelize.HasManyGetAssociationsMixin<payments>;
  setPayments!: Sequelize.HasManySetAssociationsMixin<payments, paymentsId>;
  addPayment!: Sequelize.HasManyAddAssociationMixin<payments, paymentsId>;
  addPayments!: Sequelize.HasManyAddAssociationsMixin<payments, paymentsId>;
  createPayment!: Sequelize.HasManyCreateAssociationMixin<payments>;
  removePayment!: Sequelize.HasManyRemoveAssociationMixin<payments, paymentsId>;
  removePayments!: Sequelize.HasManyRemoveAssociationsMixin<payments, paymentsId>;
  hasPayment!: Sequelize.HasManyHasAssociationMixin<payments, paymentsId>;
  hasPayments!: Sequelize.HasManyHasAssociationsMixin<payments, paymentsId>;
  countPayments!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany private_contests via user_id
  private_contests!: private_contests[];
  getPrivate_contests!: Sequelize.HasManyGetAssociationsMixin<private_contests>;
  setPrivate_contests!: Sequelize.HasManySetAssociationsMixin<private_contests, private_contestsId>;
  addPrivate_contest!: Sequelize.HasManyAddAssociationMixin<private_contests, private_contestsId>;
  addPrivate_contests!: Sequelize.HasManyAddAssociationsMixin<private_contests, private_contestsId>;
  createPrivate_contest!: Sequelize.HasManyCreateAssociationMixin<private_contests>;
  removePrivate_contest!: Sequelize.HasManyRemoveAssociationMixin<private_contests, private_contestsId>;
  removePrivate_contests!: Sequelize.HasManyRemoveAssociationsMixin<private_contests, private_contestsId>;
  hasPrivate_contest!: Sequelize.HasManyHasAssociationMixin<private_contests, private_contestsId>;
  hasPrivate_contests!: Sequelize.HasManyHasAssociationsMixin<private_contests, private_contestsId>;
  countPrivate_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany referal_amount_details via user_id
  referal_amount_details!: referal_amount_details[];
  getReferal_amount_details!: Sequelize.HasManyGetAssociationsMixin<referal_amount_details>;
  setReferal_amount_details!: Sequelize.HasManySetAssociationsMixin<referal_amount_details, referal_amount_detailsId>;
  addReferal_amount_detail!: Sequelize.HasManyAddAssociationMixin<referal_amount_details, referal_amount_detailsId>;
  addReferal_amount_details!: Sequelize.HasManyAddAssociationsMixin<referal_amount_details, referal_amount_detailsId>;
  createReferal_amount_detail!: Sequelize.HasManyCreateAssociationMixin<referal_amount_details>;
  removeReferal_amount_detail!: Sequelize.HasManyRemoveAssociationMixin<referal_amount_details, referal_amount_detailsId>;
  removeReferal_amount_details!: Sequelize.HasManyRemoveAssociationsMixin<referal_amount_details, referal_amount_detailsId>;
  hasReferal_amount_detail!: Sequelize.HasManyHasAssociationMixin<referal_amount_details, referal_amount_detailsId>;
  hasReferal_amount_details!: Sequelize.HasManyHasAssociationsMixin<referal_amount_details, referal_amount_detailsId>;
  countReferal_amount_details!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany referal_amount_details via earn_by
  earn_by_referal_amount_details!: referal_amount_details[];
  getEarn_by_referal_amount_details!: Sequelize.HasManyGetAssociationsMixin<referal_amount_details>;
  setEarn_by_referal_amount_details!: Sequelize.HasManySetAssociationsMixin<referal_amount_details, referal_amount_detailsId>;
  addEarn_by_referal_amount_detail!: Sequelize.HasManyAddAssociationMixin<referal_amount_details, referal_amount_detailsId>;
  addEarn_by_referal_amount_details!: Sequelize.HasManyAddAssociationsMixin<referal_amount_details, referal_amount_detailsId>;
  createEarn_by_referal_amount_detail!: Sequelize.HasManyCreateAssociationMixin<referal_amount_details>;
  removeEarn_by_referal_amount_detail!: Sequelize.HasManyRemoveAssociationMixin<referal_amount_details, referal_amount_detailsId>;
  removeEarn_by_referal_amount_details!: Sequelize.HasManyRemoveAssociationsMixin<referal_amount_details, referal_amount_detailsId>;
  hasEarn_by_referal_amount_detail!: Sequelize.HasManyHasAssociationMixin<referal_amount_details, referal_amount_detailsId>;
  hasEarn_by_referal_amount_details!: Sequelize.HasManyHasAssociationsMixin<referal_amount_details, referal_amount_detailsId>;
  countEarn_by_referal_amount_details!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany referal_deposit_details via user_id
  referal_deposit_details!: referal_deposit_details[];
  getReferal_deposit_details!: Sequelize.HasManyGetAssociationsMixin<referal_deposit_details>;
  setReferal_deposit_details!: Sequelize.HasManySetAssociationsMixin<referal_deposit_details, referal_deposit_detailsId>;
  addReferal_deposit_detail!: Sequelize.HasManyAddAssociationMixin<referal_deposit_details, referal_deposit_detailsId>;
  addReferal_deposit_details!: Sequelize.HasManyAddAssociationsMixin<referal_deposit_details, referal_deposit_detailsId>;
  createReferal_deposit_detail!: Sequelize.HasManyCreateAssociationMixin<referal_deposit_details>;
  removeReferal_deposit_detail!: Sequelize.HasManyRemoveAssociationMixin<referal_deposit_details, referal_deposit_detailsId>;
  removeReferal_deposit_details!: Sequelize.HasManyRemoveAssociationsMixin<referal_deposit_details, referal_deposit_detailsId>;
  hasReferal_deposit_detail!: Sequelize.HasManyHasAssociationMixin<referal_deposit_details, referal_deposit_detailsId>;
  hasReferal_deposit_details!: Sequelize.HasManyHasAssociationsMixin<referal_deposit_details, referal_deposit_detailsId>;
  countReferal_deposit_details!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany referal_deposit_details via earn_by
  earn_by_referal_deposit_details!: referal_deposit_details[];
  getEarn_by_referal_deposit_details!: Sequelize.HasManyGetAssociationsMixin<referal_deposit_details>;
  setEarn_by_referal_deposit_details!: Sequelize.HasManySetAssociationsMixin<referal_deposit_details, referal_deposit_detailsId>;
  addEarn_by_referal_deposit_detail!: Sequelize.HasManyAddAssociationMixin<referal_deposit_details, referal_deposit_detailsId>;
  addEarn_by_referal_deposit_details!: Sequelize.HasManyAddAssociationsMixin<referal_deposit_details, referal_deposit_detailsId>;
  createEarn_by_referal_deposit_detail!: Sequelize.HasManyCreateAssociationMixin<referal_deposit_details>;
  removeEarn_by_referal_deposit_detail!: Sequelize.HasManyRemoveAssociationMixin<referal_deposit_details, referal_deposit_detailsId>;
  removeEarn_by_referal_deposit_details!: Sequelize.HasManyRemoveAssociationsMixin<referal_deposit_details, referal_deposit_detailsId>;
  hasEarn_by_referal_deposit_detail!: Sequelize.HasManyHasAssociationMixin<referal_deposit_details, referal_deposit_detailsId>;
  hasEarn_by_referal_deposit_details!: Sequelize.HasManyHasAssociationsMixin<referal_deposit_details, referal_deposit_detailsId>;
  countEarn_by_referal_deposit_details!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany tds via user_id
  tds!: tds[];
  getTds!: Sequelize.HasManyGetAssociationsMixin<tds>;
  setTds!: Sequelize.HasManySetAssociationsMixin<tds, tdsId>;
  addTd!: Sequelize.HasManyAddAssociationMixin<tds, tdsId>;
  addTds!: Sequelize.HasManyAddAssociationsMixin<tds, tdsId>;
  createTd!: Sequelize.HasManyCreateAssociationMixin<tds>;
  removeTd!: Sequelize.HasManyRemoveAssociationMixin<tds, tdsId>;
  removeTds!: Sequelize.HasManyRemoveAssociationsMixin<tds, tdsId>;
  hasTd!: Sequelize.HasManyHasAssociationMixin<tds, tdsId>;
  hasTds!: Sequelize.HasManyHasAssociationsMixin<tds, tdsId>;
  countTds!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany user_contests via user_id
  user_contests!: user_contests[];
  getUser_contests!: Sequelize.HasManyGetAssociationsMixin<user_contests>;
  setUser_contests!: Sequelize.HasManySetAssociationsMixin<user_contests, user_contestsId>;
  addUser_contest!: Sequelize.HasManyAddAssociationMixin<user_contests, user_contestsId>;
  addUser_contests!: Sequelize.HasManyAddAssociationsMixin<user_contests, user_contestsId>;
  createUser_contest!: Sequelize.HasManyCreateAssociationMixin<user_contests>;
  removeUser_contest!: Sequelize.HasManyRemoveAssociationMixin<user_contests, user_contestsId>;
  removeUser_contests!: Sequelize.HasManyRemoveAssociationsMixin<user_contests, user_contestsId>;
  hasUser_contest!: Sequelize.HasManyHasAssociationMixin<user_contests, user_contestsId>;
  hasUser_contests!: Sequelize.HasManyHasAssociationsMixin<user_contests, user_contestsId>;
  countUser_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany user_private_contests via user_id
  user_private_contests!: user_private_contests[];
  getUser_private_contests!: Sequelize.HasManyGetAssociationsMixin<user_private_contests>;
  setUser_private_contests!: Sequelize.HasManySetAssociationsMixin<user_private_contests, user_private_contestsId>;
  addUser_private_contest!: Sequelize.HasManyAddAssociationMixin<user_private_contests, user_private_contestsId>;
  addUser_private_contests!: Sequelize.HasManyAddAssociationsMixin<user_private_contests, user_private_contestsId>;
  createUser_private_contest!: Sequelize.HasManyCreateAssociationMixin<user_private_contests>;
  removeUser_private_contest!: Sequelize.HasManyRemoveAssociationMixin<user_private_contests, user_private_contestsId>;
  removeUser_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<user_private_contests, user_private_contestsId>;
  hasUser_private_contest!: Sequelize.HasManyHasAssociationMixin<user_private_contests, user_private_contestsId>;
  hasUser_private_contests!: Sequelize.HasManyHasAssociationsMixin<user_private_contests, user_private_contestsId>;
  countUser_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany user_teams via user_id
  user_teams!: user_teams[];
  getUser_teams!: Sequelize.HasManyGetAssociationsMixin<user_teams>;
  setUser_teams!: Sequelize.HasManySetAssociationsMixin<user_teams, user_teamsId>;
  addUser_team!: Sequelize.HasManyAddAssociationMixin<user_teams, user_teamsId>;
  addUser_teams!: Sequelize.HasManyAddAssociationsMixin<user_teams, user_teamsId>;
  createUser_team!: Sequelize.HasManyCreateAssociationMixin<user_teams>;
  removeUser_team!: Sequelize.HasManyRemoveAssociationMixin<user_teams, user_teamsId>;
  removeUser_teams!: Sequelize.HasManyRemoveAssociationsMixin<user_teams, user_teamsId>;
  hasUser_team!: Sequelize.HasManyHasAssociationMixin<user_teams, user_teamsId>;
  hasUser_teams!: Sequelize.HasManyHasAssociationsMixin<user_teams, user_teamsId>;
  countUser_teams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return sequelize.define('users', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "users_email_unique"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "users_phone_unique"
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'states',
        key: 'id'
      }
    },
    balance: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    is_mini: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    admin_time_change: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    winning_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    deposited_balance: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    cash_bonus: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    winning_points: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true,
      defaultValue: 0.00
    },
    phone_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    document_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    profile_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    aadhaar_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_username_update: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    can_played: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    referral_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    referral_bonus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    referral_amount: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    referral_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    is_deposit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    referral_pending_amount: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    refered_by_upper_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.ENUM('admin','user','h2h'),
      allowNull: false,
      defaultValue: "user"
    },
    remember_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    verification_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bank_update_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    adhaar_update_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fcm_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    promoter_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Normal User,1-Master Promoter,2-Promoter"
    },
    influncer_commission: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    influncer_referal_bonus: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true,
      defaultValue: 0.00
    },
    app_version: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "0"
    },
    is_sys_user: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-System User"
    },
    influncer_user: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    influncer_created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    old_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_email_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_phone_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phone" },
        ]
      },
      {
        name: "users_state_id_foreign",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
      {
        name: "username",
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  }) as typeof users;
  }
}
