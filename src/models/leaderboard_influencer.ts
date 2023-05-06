import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface leaderboard_influencerAttributes {
  id: number;
  user_id: string;
  deposit: number;
  rank: number;
  created_at: Date;
  updated_at: Date;
}

export type leaderboard_influencerPk = "id";
export type leaderboard_influencerId = leaderboard_influencer[leaderboard_influencerPk];
export type leaderboard_influencerOptionalAttributes = "id" | "deposit" | "rank";
export type leaderboard_influencerCreationAttributes = Optional<leaderboard_influencerAttributes, leaderboard_influencerOptionalAttributes>;

export class leaderboard_influencer extends Model<leaderboard_influencerAttributes, leaderboard_influencerCreationAttributes> implements leaderboard_influencerAttributes {
  id!: number;
  user_id!: string;
  deposit!: number;
  rank!: number;
  created_at!: Date;
  updated_at!: Date;

  // leaderboard_influencer belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof leaderboard_influencer {
    return sequelize.define('leaderboard_influencer', {
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
    deposit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'leaderboard_influencer',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof leaderboard_influencer;
  }
}
