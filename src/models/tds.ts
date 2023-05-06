import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { payments, paymentsId } from './payments';
import type { users, usersId } from './users';

export interface tdsAttributes {
  id: number;
  payment_id: number;
  user_id: string;
  amount: number;
  is_settled: string;
  note?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type tdsPk = "id";
export type tdsId = tds[tdsPk];
export type tdsOptionalAttributes = "id" | "is_settled" | "note" | "created_at" | "updated_at";
export type tdsCreationAttributes = Optional<tdsAttributes, tdsOptionalAttributes>;

export class tds extends Model<tdsAttributes, tdsCreationAttributes> implements tdsAttributes {
  id!: number;
  payment_id!: number;
  user_id!: string;
  amount!: number;
  is_settled!: string;
  note?: string;
  created_at?: Date;
  updated_at?: Date;

  // tds belongsTo payments via payment_id
  payment!: payments;
  getPayment!: Sequelize.BelongsToGetAssociationMixin<payments>;
  setPayment!: Sequelize.BelongsToSetAssociationMixin<payments, paymentsId>;
  createPayment!: Sequelize.BelongsToCreateAssociationMixin<payments>;
  // tds belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tds {
    return sequelize.define('tds', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    payment_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'payments',
        key: 'id'
      }
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
    is_settled: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tds',
    timestamps: false,
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
        name: "tds_payment_id_foreign",
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
      {
        name: "tds_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof tds;
  }
}
