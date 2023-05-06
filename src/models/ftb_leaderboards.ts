import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_competitions, ftb_competitionsId } from './ftb_competitions';
import type { users, usersId } from './users';

export interface ftb_leaderboardsAttributes {
  id: number;
  competition_id: number;
  user_id: string;
  total_point: number;
  rank: number;
  created_at: Date;
  updated_at: Date;
}

export type ftb_leaderboardsPk = "id";
export type ftb_leaderboardsId = ftb_leaderboards[ftb_leaderboardsPk];
export type ftb_leaderboardsOptionalAttributes = "id" | "rank" | "created_at" | "updated_at";
export type ftb_leaderboardsCreationAttributes = Optional<ftb_leaderboardsAttributes, ftb_leaderboardsOptionalAttributes>;

export class ftb_leaderboards extends Model<ftb_leaderboardsAttributes, ftb_leaderboardsCreationAttributes> implements ftb_leaderboardsAttributes {
  id!: number;
  competition_id!: number;
  user_id!: string;
  total_point!: number;
  rank!: number;
  created_at!: Date;
  updated_at!: Date;

  // ftb_leaderboards belongsTo ftb_competitions via competition_id
  competition!: ftb_competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<ftb_competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<ftb_competitions, ftb_competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<ftb_competitions>;
  // ftb_leaderboards belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_leaderboards {
    return sequelize.define('ftb_leaderboards', {
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
        model: 'ftb_competitions',
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
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'ftb_leaderboards',
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
  }) as typeof ftb_leaderboards;
  }
}
