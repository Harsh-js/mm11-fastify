import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hky_fixtures, hky_fixturesId } from './hky_fixtures';
import type { hky_user_contests, hky_user_contestsId } from './hky_user_contests';
import type { hky_user_private_contests, hky_user_private_contestsId } from './hky_user_private_contests';
import type { users, usersId } from './users';

export interface hky_user_teamsAttributes {
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
  created_at?: Date;
  updated_at?: Date;
  master_player_id?: number;
}

export type hky_user_teamsPk = "id";
export type hky_user_teamsId = hky_user_teams[hky_user_teamsPk];
export type hky_user_teamsOptionalAttributes = "competition_id" | "inning_number" | "total_points" | "is_leaderboard" | "created_at" | "updated_at" | "master_player_id";
export type hky_user_teamsCreationAttributes = Optional<hky_user_teamsAttributes, hky_user_teamsOptionalAttributes>;

export class hky_user_teams extends Model<hky_user_teamsAttributes, hky_user_teamsCreationAttributes> implements hky_user_teamsAttributes {
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
  created_at?: Date;
  updated_at?: Date;
  master_player_id?: number;

  // hky_user_teams belongsTo hky_fixtures via fixture_id
  fixture!: hky_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<hky_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<hky_fixtures, hky_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<hky_fixtures>;
  // hky_user_teams hasMany hky_user_contests via user_team_id
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
  // hky_user_teams hasMany hky_user_private_contests via user_team_id
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
  // hky_user_teams belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_user_teams {
    return sequelize.define('hky_user_teams', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'hky_fixtures',
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
    master_player_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'hky_user_teams',
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
  }) as typeof hky_user_teams;
  }
}
