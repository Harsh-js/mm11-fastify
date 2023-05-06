import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_fixtures, kbd_fixturesId } from './kbd_fixtures';
import type { kbd_user_contests, kbd_user_contestsId } from './kbd_user_contests';
import type { kbd_user_private_contests, kbd_user_private_contestsId } from './kbd_user_private_contests';
import type { users, usersId } from './users';

export interface kbd_user_teamsAttributes {
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

export type kbd_user_teamsPk = "id";
export type kbd_user_teamsId = kbd_user_teams[kbd_user_teamsPk];
export type kbd_user_teamsOptionalAttributes = "competition_id" | "inning_number" | "total_points" | "is_leaderboard" | "created_at" | "updated_at" | "master_player_id";
export type kbd_user_teamsCreationAttributes = Optional<kbd_user_teamsAttributes, kbd_user_teamsOptionalAttributes>;

export class kbd_user_teams extends Model<kbd_user_teamsAttributes, kbd_user_teamsCreationAttributes> implements kbd_user_teamsAttributes {
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

  // kbd_user_teams belongsTo kbd_fixtures via fixture_id
  fixture!: kbd_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<kbd_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<kbd_fixtures, kbd_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<kbd_fixtures>;
  // kbd_user_teams hasMany kbd_user_contests via user_team_id
  kbd_user_contests!: kbd_user_contests[];
  getKbd_user_contests!: Sequelize.HasManyGetAssociationsMixin<kbd_user_contests>;
  setKbd_user_contests!: Sequelize.HasManySetAssociationsMixin<kbd_user_contests, kbd_user_contestsId>;
  addKbd_user_contest!: Sequelize.HasManyAddAssociationMixin<kbd_user_contests, kbd_user_contestsId>;
  addKbd_user_contests!: Sequelize.HasManyAddAssociationsMixin<kbd_user_contests, kbd_user_contestsId>;
  createKbd_user_contest!: Sequelize.HasManyCreateAssociationMixin<kbd_user_contests>;
  removeKbd_user_contest!: Sequelize.HasManyRemoveAssociationMixin<kbd_user_contests, kbd_user_contestsId>;
  removeKbd_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<kbd_user_contests, kbd_user_contestsId>;
  hasKbd_user_contest!: Sequelize.HasManyHasAssociationMixin<kbd_user_contests, kbd_user_contestsId>;
  hasKbd_user_contests!: Sequelize.HasManyHasAssociationsMixin<kbd_user_contests, kbd_user_contestsId>;
  countKbd_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // kbd_user_teams hasMany kbd_user_private_contests via user_team_id
  kbd_user_private_contests!: kbd_user_private_contests[];
  getKbd_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<kbd_user_private_contests>;
  setKbd_user_private_contests!: Sequelize.HasManySetAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  addKbd_user_private_contest!: Sequelize.HasManyAddAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  addKbd_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  createKbd_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<kbd_user_private_contests>;
  removeKbd_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  removeKbd_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  hasKbd_user_private_contest!: Sequelize.HasManyHasAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  hasKbd_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  countKbd_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // kbd_user_teams belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_user_teams {
    return sequelize.define('kbd_user_teams', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'kbd_fixtures',
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
    tableName: 'kbd_user_teams',
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
  }) as typeof kbd_user_teams;
  }
}
