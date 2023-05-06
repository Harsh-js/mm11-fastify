import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { payments, paymentsId } from './payments';
import type { users, usersId } from './users';

export interface referal_deposit_detailsAttributes {
  id: number;
  user_id: string;
  earn_by: string;
  deposited_amount: number;
  payment_id: number;
  referal_level: number;
  referal_percentage: number;
  amount: number;
  is_deposieted: number;
  date: string;
  flag: number;
  created_at?: Date;
  updated_at?: Date;
}

export type referal_deposit_detailsPk = "id";
export type referal_deposit_detailsId = referal_deposit_details[referal_deposit_detailsPk];
export type referal_deposit_detailsOptionalAttributes = "id" | "is_deposieted" | "flag" | "created_at" | "updated_at";
export type referal_deposit_detailsCreationAttributes = Optional<referal_deposit_detailsAttributes, referal_deposit_detailsOptionalAttributes>;

export class referal_deposit_details extends Model<referal_deposit_detailsAttributes, referal_deposit_detailsCreationAttributes> implements referal_deposit_detailsAttributes {
  id!: number;
  user_id!: string;
  earn_by!: string;
  deposited_amount!: number;
  payment_id!: number;
  referal_level!: number;
  referal_percentage!: number;
  amount!: number;
  is_deposieted!: number;
  date!: string;
  flag!: number;
  created_at?: Date;
  updated_at?: Date;

  // referal_deposit_details belongsTo payments via payment_id
  payment!: payments;
  getPayment!: Sequelize.BelongsToGetAssociationMixin<payments>;
  setPayment!: Sequelize.BelongsToSetAssociationMixin<payments, paymentsId>;
  createPayment!: Sequelize.BelongsToCreateAssociationMixin<payments>;
  // referal_deposit_details belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // referal_deposit_details belongsTo users via earn_by
  earn_by_user!: users;
  getEarn_by_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setEarn_by_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createEarn_by_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof referal_deposit_details {
    return sequelize.define('referal_deposit_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
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
    earn_by: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      comment: "That user Id who Deposit Amount",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    deposited_amount: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    payment_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'payments',
        key: 'id'
      }
    },
    referal_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referal_percentage: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    is_deposieted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Not,1-Yes"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    flag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'referal_deposit_details',
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
        name: "idx_date_amount_user_id",
        using: "BTREE",
        fields: [
          { name: "date" },
          { name: "amount" },
          { name: "user_id" },
        ]
      },
      {
        name: "idx_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "referal_deposit_details_payment_id_foreign",
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
      {
        name: "earn_by",
        using: "BTREE",
        fields: [
          { name: "earn_by" },
        ]
      },
    ]
  }) as typeof referal_deposit_details;
  }
}
