import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface referal_amount_detailsAttributes {
  id: number;
  user_id: string;
  earn_by: string;
  game_id: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '998' | '999';
  fixture_id: number;
  contest_id: string;
  user_team_id: string;
  referal_percentage: number;
  amount?: number;
  payment_data?: string;
  is_deposieted: number;
  flag?: number;
  fixture_meta_data?: object;
  contest_meta_data?: object;
  created_at?: Date;
  updated_at?: Date;
}

export type referal_amount_detailsPk = "id";
export type referal_amount_detailsId = referal_amount_details[referal_amount_detailsPk];
export type referal_amount_detailsOptionalAttributes = "id" | "amount" | "payment_data" | "is_deposieted" | "flag" | "fixture_meta_data" | "contest_meta_data" | "created_at" | "updated_at";
export type referal_amount_detailsCreationAttributes = Optional<referal_amount_detailsAttributes, referal_amount_detailsOptionalAttributes>;

export class referal_amount_details extends Model<referal_amount_detailsAttributes, referal_amount_detailsCreationAttributes> implements referal_amount_detailsAttributes {
  id!: number;
  user_id!: string;
  earn_by!: string;
  game_id!: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '998' | '999';
  fixture_id!: number;
  contest_id!: string;
  user_team_id!: string;
  referal_percentage!: number;
  amount?: number;
  payment_data?: string;
  is_deposieted!: number;
  flag?: number;
  fixture_meta_data?: object;
  contest_meta_data?: object;
  created_at?: Date;
  updated_at?: Date;

  // referal_amount_details belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // referal_amount_details belongsTo users via earn_by
  earn_by_user!: users;
  getEarn_by_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setEarn_by_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createEarn_by_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof referal_amount_details {
    return sequelize.define('referal_amount_details', {
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
      comment: "That user Id who play game",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    game_id: {
      type: DataTypes.ENUM('1','2','3','4','5','6','7','8','9','10','998','999'),
      allowNull: false,
      comment: "1-Cricket,2-Basketball,3-Rummy,4-Ludo,5-Football,6-Kabaddi,7-Baseball , 999-Convert Mega User Bonus,998-T20 Offer"
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    user_team_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    referal_percentage: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    payment_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_deposieted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Not,1-Yes"
    },
    flag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fixture_meta_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    contest_meta_data: {
      type: DataTypes.JSON,
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
    tableName: 'referal_amount_details',
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
        name: "idx_date_amount_user_id",
        using: "BTREE",
        fields: [
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
        name: "earn_by",
        using: "BTREE",
        fields: [
          { name: "earn_by" },
        ]
      },
      {
        name: "fixture_id",
        using: "BTREE",
        fields: [
          { name: "fixture_id" },
        ]
      },
      {
        name: "contest_id",
        using: "BTREE",
        fields: [
          { name: "contest_id" },
        ]
      },
      {
        name: "user_team_id",
        using: "BTREE",
        fields: [
          { name: "user_team_id" },
        ]
      },
    ]
  }) as typeof referal_amount_details;
  }
}
