import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fixtures, fixturesId } from './fixtures';
import type { user_contests, user_contestsId } from './user_contests';
import type { user_private_contests, user_private_contestsId } from './user_private_contests';
import type { users, usersId } from './users';

export interface user_teamsAttributes {
  id: string;
  fixture_id: number;
  competition_id?: number;
  user_id: string;
  name: string;
  inning_number?: number;
  players: object;
  captain_id: number;
  vice_captain_id: number;
  total_points: number;
  is_leaderboard?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  master_player_id?: number;
}

export type user_teamsPk = "id";
export type user_teamsId = user_teams[user_teamsPk];
export type user_teamsOptionalAttributes = "competition_id" | "inning_number" | "total_points" | "is_leaderboard" | "updated_by" | "created_at" | "updated_at" | "master_player_id";
export type user_teamsCreationAttributes = Optional<user_teamsAttributes, user_teamsOptionalAttributes>;

export class user_teams extends Model<user_teamsAttributes, user_teamsCreationAttributes> implements user_teamsAttributes {
  id!: string;
  fixture_id!: number;
  competition_id?: number;
  user_id!: string;
  name!: string;
  inning_number?: number;
  players!: object;
  captain_id!: number;
  vice_captain_id!: number;
  total_points!: number;
  is_leaderboard?: number;
  updated_by?: number;
  created_at?: Date;
  updated_at?: Date;
  master_player_id?: number;

  // user_teams belongsTo fixtures via fixture_id
  fixture!: fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<fixtures, fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<fixtures>;
  // user_teams hasMany user_contests via user_team_id
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
  // user_teams hasMany user_private_contests via user_team_id
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
  // user_teams belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_teams {
    return sequelize.define('user_teams', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'fixtures',
        key: 'id'
      }
    },
    competition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    players: {
      type: DataTypes.JSON,
      allowNull: false
    },
    captain_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    vice_captain_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    total_points: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    is_leaderboard: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    master_player_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'user_teams',
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
        name: "user_teams_fixture_id_user_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fixture_id" },
          { name: "user_id" },
          { name: "name" },
        ]
      },
      {
        name: "user_teams_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof user_teams;
  }
}
