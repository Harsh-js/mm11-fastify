import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contests, contestsId } from './contests';
import type { private_contests, private_contestsId } from './private_contests';
import type { referal_deposit_details, referal_deposit_detailsId } from './referal_deposit_details';
import type { tds, tdsId } from './tds';
import type { users, usersId } from './users';

export interface paymentsAttributes {
  id: number;
  user_id: string;
  amount: number;
  status: string;
  transaction_id: string;
  description: string;
  type: 'DEPOSIT' | 'WITHDRAW' | 'CONTEST JOIN' | 'CONTEST WON' | 'REFUND' | 'ADMIN ADDED' | 'ADMIN DEDUCT' | 'PROMOTER ADD' | 'PROMOTER UPDATE' | 'COUPON' | 'PROMOTER COMMISSION' | 'LEVEL BONUS' | 'BONUS' | 'REDEEM POINT' | 'INFLUENCER COMMISSION' | 'TDS';
  contest_id?: string;
  ftb_contest_id?: string;
  kbd_contest_id?: string;
  bkb_contest_id?: string;
  private_contest_id?: string;
  ftb_private_contest_id?: string;
  kbd_private_contest_id?: string;
  bkb_private_contest_id?: string;
  reference_id?: string;
  payment_gateway?: 'CASHFREE' | 'EASEBUZZ';
  extra?: object;
  payment_at: Date;
  coupon_id?: number;
  is_lock: number;
  created_at?: Date;
  updated_at?: Date;
}

export type paymentsPk = "id";
export type paymentsId = payments[paymentsPk];
export type paymentsOptionalAttributes = "id" | "contest_id" | "ftb_contest_id" | "kbd_contest_id" | "bkb_contest_id" | "private_contest_id" | "ftb_private_contest_id" | "kbd_private_contest_id" | "bkb_private_contest_id" | "reference_id" | "payment_gateway" | "extra" | "payment_at" | "coupon_id" | "is_lock" | "created_at" | "updated_at";
export type paymentsCreationAttributes = Optional<paymentsAttributes, paymentsOptionalAttributes>;

export class payments extends Model<paymentsAttributes, paymentsCreationAttributes> implements paymentsAttributes {
  id!: number;
  user_id!: string;
  amount!: number;
  status!: string;
  transaction_id!: string;
  description!: string;
  type!: 'DEPOSIT' | 'WITHDRAW' | 'CONTEST JOIN' | 'CONTEST WON' | 'REFUND' | 'ADMIN ADDED' | 'ADMIN DEDUCT' | 'PROMOTER ADD' | 'PROMOTER UPDATE' | 'COUPON' | 'PROMOTER COMMISSION' | 'LEVEL BONUS' | 'BONUS' | 'REDEEM POINT' | 'INFLUENCER COMMISSION' | 'TDS';
  contest_id?: string;
  ftb_contest_id?: string;
  kbd_contest_id?: string;
  bkb_contest_id?: string;
  private_contest_id?: string;
  ftb_private_contest_id?: string;
  kbd_private_contest_id?: string;
  bkb_private_contest_id?: string;
  reference_id?: string;
  payment_gateway?: 'CASHFREE' | 'EASEBUZZ';
  extra?: object;
  payment_at!: Date;
  coupon_id?: number;
  is_lock!: number;
  created_at?: Date;
  updated_at?: Date;

  // payments belongsTo contests via contest_id
  contest!: contests;
  getContest!: Sequelize.BelongsToGetAssociationMixin<contests>;
  setContest!: Sequelize.BelongsToSetAssociationMixin<contests, contestsId>;
  createContest!: Sequelize.BelongsToCreateAssociationMixin<contests>;
  // payments hasMany referal_deposit_details via payment_id
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
  // payments hasMany tds via payment_id
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
  // payments belongsTo private_contests via private_contest_id
  private_contest!: private_contests;
  getPrivate_contest!: Sequelize.BelongsToGetAssociationMixin<private_contests>;
  setPrivate_contest!: Sequelize.BelongsToSetAssociationMixin<private_contests, private_contestsId>;
  createPrivate_contest!: Sequelize.BelongsToCreateAssociationMixin<private_contests>;
  // payments belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payments {
    return sequelize.define('payments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('DEPOSIT','WITHDRAW','CONTEST JOIN','CONTEST WON','REFUND','ADMIN ADDED','ADMIN DEDUCT','PROMOTER ADD','PROMOTER UPDATE','COUPON','PROMOTER COMMISSION','LEVEL BONUS','BONUS','REDEEM POINT','INFLUENCER COMMISSION','TDS'),
      allowNull: false
    },
    contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'contests',
        key: 'id'
      }
    },
    ftb_contest_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    kbd_contest_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    bkb_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    private_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'private_contests',
        key: 'id'
      }
    },
    ftb_private_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    kbd_private_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    bkb_private_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    reference_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "payments_reference_id_unique"
    },
    payment_gateway: {
      type: DataTypes.ENUM('CASHFREE','EASEBUZZ'),
      allowNull: true
    },
    extra: {
      type: DataTypes.JSON,
      allowNull: true
    },
    payment_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    coupon_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    is_lock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'payments',
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
        name: "payments_reference_id_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reference_id" },
        ]
      },
      {
        name: "payments_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "payments_contest_id_foreign",
        using: "BTREE",
        fields: [
          { name: "contest_id" },
        ]
      },
      {
        name: "payments_private_contest_id_foreign",
        using: "BTREE",
        fields: [
          { name: "private_contest_id" },
        ]
      },
      {
        name: "transaction_id_1",
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
        ]
      },
      {
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "created_at",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  }) as typeof payments;
  }
}
