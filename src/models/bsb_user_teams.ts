import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_fixtures, bsb_fixturesId } from './bsb_fixtures';
import type { bsb_user_contests, bsb_user_contestsId } from './bsb_user_contests';
import type { bsb_user_private_contests, bsb_user_private_contestsId } from './bsb_user_private_contests';
import type { users, usersId } from './users';

export interface bsb_user_teamsAttributes {
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

export type bsb_user_teamsPk = "id";
export type bsb_user_teamsId = bsb_user_teams[bsb_user_teamsPk];
export type bsb_user_teamsOptionalAttributes = "competition_id" | "inning_number" | "total_points" | "is_leaderboard" | "created_at" | "updated_at" | "master_player_id";
export type bsb_user_teamsCreationAttributes = Optional<bsb_user_teamsAttributes, bsb_user_teamsOptionalAttributes>;

export class bsb_user_teams extends Model<bsb_user_teamsAttributes, bsb_user_teamsCreationAttributes> implements bsb_user_teamsAttributes {
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

  // bsb_user_teams belongsTo bsb_fixtures via fixture_id
  fixture!: bsb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<bsb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<bsb_fixtures, bsb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<bsb_fixtures>;
  // bsb_user_teams hasMany bsb_user_contests via user_team_id
  bsb_user_contests!: bsb_user_contests[];
  getBsb_user_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_user_contests>;
  setBsb_user_contests!: Sequelize.HasManySetAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  addBsb_user_contest!: Sequelize.HasManyAddAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  addBsb_user_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  createBsb_user_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_user_contests>;
  removeBsb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  removeBsb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  hasBsb_user_contest!: Sequelize.HasManyHasAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  hasBsb_user_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  countBsb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bsb_user_teams hasMany bsb_user_private_contests via user_team_id
  bsb_user_private_contests!: bsb_user_private_contests[];
  getBsb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_user_private_contests>;
  setBsb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  addBsb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  addBsb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  createBsb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_user_private_contests>;
  removeBsb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  removeBsb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  hasBsb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  hasBsb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  countBsb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bsb_user_teams belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_user_teams {
    return sequelize.define('bsb_user_teams', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bsb_fixtures',
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
    tableName: 'bsb_user_teams',
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
  }) as typeof bsb_user_teams;
  }
}
