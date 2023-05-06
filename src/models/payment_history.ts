import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface payment_historyAttributes {
  id: number;
  total_winning?: number;
  total_deposit?: number;
  total_refund?: number;
  total_join?: number;
  admin_added?: number;
  admin_deduct?: number;
  user_winning_wallet?: number;
  user_bonus_wallet?: number;
  user_deposite_wallet?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type payment_historyPk = "id";
export type payment_historyId = payment_history[payment_historyPk];
export type payment_historyOptionalAttributes = "id" | "total_winning" | "total_deposit" | "total_refund" | "total_join" | "admin_added" | "admin_deduct" | "user_winning_wallet" | "user_bonus_wallet" | "user_deposite_wallet" | "created_at" | "updated_at";
export type payment_historyCreationAttributes = Optional<payment_historyAttributes, payment_historyOptionalAttributes>;

export class payment_history extends Model<payment_historyAttributes, payment_historyCreationAttributes> implements payment_historyAttributes {
  id!: number;
  total_winning?: number;
  total_deposit?: number;
  total_refund?: number;
  total_join?: number;
  admin_added?: number;
  admin_deduct?: number;
  user_winning_wallet?: number;
  user_bonus_wallet?: number;
  user_deposite_wallet?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof payment_history {
    return sequelize.define('payment_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    total_winning: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    total_deposit: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    total_refund: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    total_join: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    admin_added: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    admin_deduct: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    user_winning_wallet: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    user_bonus_wallet: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    user_deposite_wallet: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    }
  }, {
    tableName: 'payment_history',
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
    ]
  }) as typeof payment_history;
  }
}
