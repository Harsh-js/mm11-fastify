import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_fixtures, ftb_fixturesId } from './ftb_fixtures';
import type { ftb_user_contests, ftb_user_contestsId } from './ftb_user_contests';
import type { ftb_user_private_contests, ftb_user_private_contestsId } from './ftb_user_private_contests';
import type { users, usersId } from './users';

export interface ftb_user_teamsAttributes {
  id: string;
  fixture_id: number;
  competition_id?: number;
  user_id: string;
  name: string;
  inning_number: number;
  players: object;
  master_player_id?: number;
  captain_id: number;
  vice_captain_id: number;
  total_points: number;
  is_leaderboard?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_user_teamsPk = "id";
export type ftb_user_teamsId = ftb_user_teams[ftb_user_teamsPk];
export type ftb_user_teamsOptionalAttributes = "competition_id" | "inning_number" | "master_player_id" | "total_points" | "is_leaderboard" | "created_at" | "updated_at";
export type ftb_user_teamsCreationAttributes = Optional<ftb_user_teamsAttributes, ftb_user_teamsOptionalAttributes>;

export class ftb_user_teams extends Model<ftb_user_teamsAttributes, ftb_user_teamsCreationAttributes> implements ftb_user_teamsAttributes {
  id!: string;
  fixture_id!: number;
  competition_id?: number;
  user_id!: string;
  name!: string;
  inning_number!: number;
  players!: object;
  master_player_id?: number;
  captain_id!: number;
  vice_captain_id!: number;
  total_points!: number;
  is_leaderboard?: number;
  created_at?: Date;
  updated_at?: Date;

  // ftb_user_teams belongsTo ftb_fixtures via fixture_id
  fixture!: ftb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<ftb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<ftb_fixtures, ftb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<ftb_fixtures>;
  // ftb_user_teams hasMany ftb_user_contests via user_team_id
  ftb_user_contests!: ftb_user_contests[];
  getFtb_user_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_user_contests>;
  setFtb_user_contests!: Sequelize.HasManySetAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  addFtb_user_contest!: Sequelize.HasManyAddAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  addFtb_user_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  createFtb_user_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_user_contests>;
  removeFtb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  removeFtb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  hasFtb_user_contest!: Sequelize.HasManyHasAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  hasFtb_user_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  countFtb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // ftb_user_teams hasMany ftb_user_private_contests via user_team_id
  ftb_user_private_contests!: ftb_user_private_contests[];
  getFtb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_user_private_contests>;
  setFtb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  addFtb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  addFtb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  createFtb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_user_private_contests>;
  removeFtb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  removeFtb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  hasFtb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  hasFtb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  countFtb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // ftb_user_teams belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_user_teams {
    return sequelize.define('ftb_user_teams', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ftb_fixtures',
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
      allowNull: false,
      defaultValue: 0
    },
    players: {
      type: DataTypes.JSON,
      allowNull: false
    },
    master_player_id: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ftb_user_teams',
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
  }) as typeof ftb_user_teams;
  }
}
