import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { competitions, competitionsId } from './competitions';
import type { users, usersId } from './users';

export interface investment_leaderboardAttributes {
  id: number;
  competition_id: number;
  user_id: string;
  total_point: number;
  rank: number;
  created_at: Date;
  updated_at: Date;
}

export type investment_leaderboardPk = "id";
export type investment_leaderboardId = investment_leaderboard[investment_leaderboardPk];
export type investment_leaderboardOptionalAttributes = "id" | "rank" | "created_at" | "updated_at";
export type investment_leaderboardCreationAttributes = Optional<investment_leaderboardAttributes, investment_leaderboardOptionalAttributes>;

export class investment_leaderboard extends Model<investment_leaderboardAttributes, investment_leaderboardCreationAttributes> implements investment_leaderboardAttributes {
  id!: number;
  competition_id!: number;
  user_id!: string;
  total_point!: number;
  rank!: number;
  created_at!: Date;
  updated_at!: Date;

  // investment_leaderboard belongsTo competitions via competition_id
  competition!: competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<competitions, competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<competitions>;
  // investment_leaderboard belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof investment_leaderboard {
    return sequelize.define('investment_leaderboard', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    competition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'competitions',
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
    total_point: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'investment_leaderboard',
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
        name: "competition_id",
        using: "BTREE",
        fields: [
          { name: "competition_id" },
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
  }) as typeof investment_leaderboard;
  }
}
