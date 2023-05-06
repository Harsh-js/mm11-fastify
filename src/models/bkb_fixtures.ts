import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_competitions, bkb_competitionsId } from './bkb_competitions';
import type { bkb_contests, bkb_contestsId } from './bkb_contests';
import type { bkb_private_contests, bkb_private_contestsId } from './bkb_private_contests';
import type { bkb_squads, bkb_squadsId } from './bkb_squads';
import type { bkb_user_teams, bkb_user_teamsId } from './bkb_user_teams';

export interface bkb_fixturesAttributes {
  id: number;
  name: string;
  competition_id: number;
  competition_name: string;
  inning_number: number;
  total_innings: number;
  payment_data?: string;
  payment_data_all?: string;
  season: string;
  teama: string;
  teama_id: string;
  teama_image?: string;
  teama_color?: string;
  teama_score?: string;
  teama_short_name?: string;
  teamb: string;
  teamb_id: string;
  teamb_color?: string;
  teamb_score?: string;
  teamb_short_name?: string;
  teamb_image?: string;
  format?: string;
  format_str?: string;
  starting_at?: Date;
  ending_at?: Date;
  verified: number;
  cancel_allow: number;
  pre_squad: number;
  is_active: number;
  lineup_announced: number;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  sequence_by?: number;
  allow_prize_distribution: number;
  status_note?: string;
  admin_time_change?: number;
  is_cancelled?: number;
  is_rank_updated?: number;
  last_squad_update?: Date;
  mega_value: number;
  created_at?: Date;
  updated_at?: Date;
}

export type bkb_fixturesPk = "id";
export type bkb_fixturesId = bkb_fixtures[bkb_fixturesPk];
export type bkb_fixturesOptionalAttributes = "id" | "inning_number" | "total_innings" | "payment_data" | "payment_data_all" | "teama_image" | "teama_color" | "teama_score" | "teama_short_name" | "teamb_color" | "teamb_score" | "teamb_short_name" | "teamb_image" | "format" | "format_str" | "starting_at" | "ending_at" | "cancel_allow" | "is_active" | "lineup_announced" | "status" | "sequence_by" | "allow_prize_distribution" | "status_note" | "admin_time_change" | "is_cancelled" | "is_rank_updated" | "last_squad_update" | "mega_value" | "created_at" | "updated_at";
export type bkb_fixturesCreationAttributes = Optional<bkb_fixturesAttributes, bkb_fixturesOptionalAttributes>;

export class bkb_fixtures extends Model<bkb_fixturesAttributes, bkb_fixturesCreationAttributes> implements bkb_fixturesAttributes {
  id!: number;
  name!: string;
  competition_id!: number;
  competition_name!: string;
  inning_number!: number;
  total_innings!: number;
  payment_data?: string;
  payment_data_all?: string;
  season!: string;
  teama!: string;
  teama_id!: string;
  teama_image?: string;
  teama_color?: string;
  teama_score?: string;
  teama_short_name?: string;
  teamb!: string;
  teamb_id!: string;
  teamb_color?: string;
  teamb_score?: string;
  teamb_short_name?: string;
  teamb_image?: string;
  format?: string;
  format_str?: string;
  starting_at?: Date;
  ending_at?: Date;
  verified!: number;
  cancel_allow!: number;
  pre_squad!: number;
  is_active!: number;
  lineup_announced!: number;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  sequence_by?: number;
  allow_prize_distribution!: number;
  status_note?: string;
  admin_time_change?: number;
  is_cancelled?: number;
  is_rank_updated?: number;
  last_squad_update?: Date;
  mega_value!: number;
  created_at?: Date;
  updated_at?: Date;

  // bkb_fixtures belongsTo bkb_competitions via competition_id
  competition!: bkb_competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<bkb_competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<bkb_competitions, bkb_competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<bkb_competitions>;
  // bkb_fixtures hasMany bkb_contests via fixture_id
  bkb_contests!: bkb_contests[];
  getBkb_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_contests>;
  setBkb_contests!: Sequelize.HasManySetAssociationsMixin<bkb_contests, bkb_contestsId>;
  addBkb_contest!: Sequelize.HasManyAddAssociationMixin<bkb_contests, bkb_contestsId>;
  addBkb_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_contests, bkb_contestsId>;
  createBkb_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_contests>;
  removeBkb_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_contests, bkb_contestsId>;
  removeBkb_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_contests, bkb_contestsId>;
  hasBkb_contest!: Sequelize.HasManyHasAssociationMixin<bkb_contests, bkb_contestsId>;
  hasBkb_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_contests, bkb_contestsId>;
  countBkb_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bkb_fixtures hasMany bkb_private_contests via fixture_id
  bkb_private_contests!: bkb_private_contests[];
  getBkb_private_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_private_contests>;
  setBkb_private_contests!: Sequelize.HasManySetAssociationsMixin<bkb_private_contests, bkb_private_contestsId>;
  addBkb_private_contest!: Sequelize.HasManyAddAssociationMixin<bkb_private_contests, bkb_private_contestsId>;
  addBkb_private_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_private_contests, bkb_private_contestsId>;
  createBkb_private_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_private_contests>;
  removeBkb_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_private_contests, bkb_private_contestsId>;
  removeBkb_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_private_contests, bkb_private_contestsId>;
  hasBkb_private_contest!: Sequelize.HasManyHasAssociationMixin<bkb_private_contests, bkb_private_contestsId>;
  hasBkb_private_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_private_contests, bkb_private_contestsId>;
  countBkb_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bkb_fixtures hasMany bkb_squads via fixture_id
  bkb_squads!: bkb_squads[];
  getBkb_squads!: Sequelize.HasManyGetAssociationsMixin<bkb_squads>;
  setBkb_squads!: Sequelize.HasManySetAssociationsMixin<bkb_squads, bkb_squadsId>;
  addBkb_squad!: Sequelize.HasManyAddAssociationMixin<bkb_squads, bkb_squadsId>;
  addBkb_squads!: Sequelize.HasManyAddAssociationsMixin<bkb_squads, bkb_squadsId>;
  createBkb_squad!: Sequelize.HasManyCreateAssociationMixin<bkb_squads>;
  removeBkb_squad!: Sequelize.HasManyRemoveAssociationMixin<bkb_squads, bkb_squadsId>;
  removeBkb_squads!: Sequelize.HasManyRemoveAssociationsMixin<bkb_squads, bkb_squadsId>;
  hasBkb_squad!: Sequelize.HasManyHasAssociationMixin<bkb_squads, bkb_squadsId>;
  hasBkb_squads!: Sequelize.HasManyHasAssociationsMixin<bkb_squads, bkb_squadsId>;
  countBkb_squads!: Sequelize.HasManyCountAssociationsMixin;
  // bkb_fixtures hasMany bkb_user_teams via fixture_id
  bkb_user_teams!: bkb_user_teams[];
  getBkb_user_teams!: Sequelize.HasManyGetAssociationsMixin<bkb_user_teams>;
  setBkb_user_teams!: Sequelize.HasManySetAssociationsMixin<bkb_user_teams, bkb_user_teamsId>;
  addBkb_user_team!: Sequelize.HasManyAddAssociationMixin<bkb_user_teams, bkb_user_teamsId>;
  addBkb_user_teams!: Sequelize.HasManyAddAssociationsMixin<bkb_user_teams, bkb_user_teamsId>;
  createBkb_user_team!: Sequelize.HasManyCreateAssociationMixin<bkb_user_teams>;
  removeBkb_user_team!: Sequelize.HasManyRemoveAssociationMixin<bkb_user_teams, bkb_user_teamsId>;
  removeBkb_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<bkb_user_teams, bkb_user_teamsId>;
  hasBkb_user_team!: Sequelize.HasManyHasAssociationMixin<bkb_user_teams, bkb_user_teamsId>;
  hasBkb_user_teams!: Sequelize.HasManyHasAssociationsMixin<bkb_user_teams, bkb_user_teamsId>;
  countBkb_user_teams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_fixtures {
    return sequelize.define('bkb_fixtures', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    competition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bkb_competitions',
        key: 'id'
      }
    },
    competition_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total_innings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    payment_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_data_all: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    season: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    teama: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    teama_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    teama_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teama_color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teama_score: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teama_short_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teamb: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    teamb_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    teamb_color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teamb_score: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teamb_short_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teamb_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    format: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    format_str: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    starting_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ending_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cancel_allow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    pre_squad: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    lineup_announced: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('NOT STARTED','LIVE','IN REVIEW','COMPLETED','CANCELED'),
      allowNull: false,
      defaultValue: "NOT STARTED"
    },
    sequence_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 999
    },
    allow_prize_distribution: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    status_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    admin_time_change: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_cancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_rank_updated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    last_squad_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mega_value: {
      type: DataTypes.BIGINT,
      allowNull: false,
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
    tableName: 'bkb_fixtures',
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
        name: "fixtures_competition_id_foreign",
        using: "BTREE",
        fields: [
          { name: "competition_id" },
        ]
      },
      {
        name: "fixtures_teama_teamb_name_index",
        using: "BTREE",
        fields: [
          { name: "teama" },
          { name: "teamb" },
          { name: "name" },
        ]
      },
    ]
  }) as typeof bkb_fixtures;
  }
}
