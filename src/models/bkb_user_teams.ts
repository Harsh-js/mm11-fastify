import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_fixtures, bkb_fixturesId } from './bkb_fixtures';
import type { bkb_user_contests, bkb_user_contestsId } from './bkb_user_contests';
import type { bkb_user_private_contests, bkb_user_private_contestsId } from './bkb_user_private_contests';
import type { users, usersId } from './users';

export interface bkb_user_teamsAttributes {
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

export type bkb_user_teamsPk = "id";
export type bkb_user_teamsId = bkb_user_teams[bkb_user_teamsPk];
export type bkb_user_teamsOptionalAttributes = "competition_id" | "inning_number" | "total_points" | "is_leaderboard" | "created_at" | "updated_at" | "master_player_id";
export type bkb_user_teamsCreationAttributes = Optional<bkb_user_teamsAttributes, bkb_user_teamsOptionalAttributes>;

export class bkb_user_teams extends Model<bkb_user_teamsAttributes, bkb_user_teamsCreationAttributes> implements bkb_user_teamsAttributes {
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

  // bkb_user_teams belongsTo bkb_fixtures via fixture_id
  fixture!: bkb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<bkb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<bkb_fixtures, bkb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<bkb_fixtures>;
  // bkb_user_teams hasMany bkb_user_contests via user_team_id
  bkb_user_contests!: bkb_user_contests[];
  getBkb_user_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_user_contests>;
  setBkb_user_contests!: Sequelize.HasManySetAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  addBkb_user_contest!: Sequelize.HasManyAddAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  addBkb_user_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  createBkb_user_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_user_contests>;
  removeBkb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  removeBkb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  hasBkb_user_contest!: Sequelize.HasManyHasAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  hasBkb_user_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  countBkb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bkb_user_teams hasMany bkb_user_private_contests via user_team_id
  bkb_user_private_contests!: bkb_user_private_contests[];
  getBkb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_user_private_contests>;
  setBkb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  addBkb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  addBkb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  createBkb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_user_private_contests>;
  removeBkb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  removeBkb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  hasBkb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  hasBkb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  countBkb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bkb_user_teams belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_user_teams {
    return sequelize.define('bkb_user_teams', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bkb_fixtures',
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
    tableName: 'bkb_user_teams',
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
  }) as typeof bkb_user_teams;
  }
}
