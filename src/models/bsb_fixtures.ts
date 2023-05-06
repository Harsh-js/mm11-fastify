import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_competitions, bsb_competitionsId } from './bsb_competitions';
import type { bsb_contests, bsb_contestsId } from './bsb_contests';
import type { bsb_private_contests, bsb_private_contestsId } from './bsb_private_contests';
import type { bsb_squads, bsb_squadsId } from './bsb_squads';
import type { bsb_user_teams, bsb_user_teamsId } from './bsb_user_teams';

export interface bsb_fixturesAttributes {
  id: number;
  name: string;
  competition_id: number;
  competition_name: string;
  inning_number?: number;
  total_innings?: number;
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

export type bsb_fixturesPk = "id";
export type bsb_fixturesId = bsb_fixtures[bsb_fixturesPk];
export type bsb_fixturesOptionalAttributes = "id" | "inning_number" | "total_innings" | "payment_data" | "payment_data_all" | "teama_image" | "teama_color" | "teama_score" | "teama_short_name" | "teamb_color" | "teamb_score" | "teamb_short_name" | "teamb_image" | "format" | "format_str" | "starting_at" | "ending_at" | "cancel_allow" | "is_active" | "lineup_announced" | "status" | "sequence_by" | "allow_prize_distribution" | "status_note" | "admin_time_change" | "is_cancelled" | "is_rank_updated" | "last_squad_update" | "mega_value" | "created_at" | "updated_at";
export type bsb_fixturesCreationAttributes = Optional<bsb_fixturesAttributes, bsb_fixturesOptionalAttributes>;

export class bsb_fixtures extends Model<bsb_fixturesAttributes, bsb_fixturesCreationAttributes> implements bsb_fixturesAttributes {
  id!: number;
  name!: string;
  competition_id!: number;
  competition_name!: string;
  inning_number?: number;
  total_innings?: number;
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

  // bsb_fixtures belongsTo bsb_competitions via competition_id
  competition!: bsb_competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<bsb_competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<bsb_competitions, bsb_competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<bsb_competitions>;
  // bsb_fixtures hasMany bsb_contests via fixture_id
  bsb_contests!: bsb_contests[];
  getBsb_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_contests>;
  setBsb_contests!: Sequelize.HasManySetAssociationsMixin<bsb_contests, bsb_contestsId>;
  addBsb_contest!: Sequelize.HasManyAddAssociationMixin<bsb_contests, bsb_contestsId>;
  addBsb_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_contests, bsb_contestsId>;
  createBsb_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_contests>;
  removeBsb_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_contests, bsb_contestsId>;
  removeBsb_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_contests, bsb_contestsId>;
  hasBsb_contest!: Sequelize.HasManyHasAssociationMixin<bsb_contests, bsb_contestsId>;
  hasBsb_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_contests, bsb_contestsId>;
  countBsb_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bsb_fixtures hasMany bsb_private_contests via fixture_id
  bsb_private_contests!: bsb_private_contests[];
  getBsb_private_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_private_contests>;
  setBsb_private_contests!: Sequelize.HasManySetAssociationsMixin<bsb_private_contests, bsb_private_contestsId>;
  addBsb_private_contest!: Sequelize.HasManyAddAssociationMixin<bsb_private_contests, bsb_private_contestsId>;
  addBsb_private_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_private_contests, bsb_private_contestsId>;
  createBsb_private_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_private_contests>;
  removeBsb_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_private_contests, bsb_private_contestsId>;
  removeBsb_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_private_contests, bsb_private_contestsId>;
  hasBsb_private_contest!: Sequelize.HasManyHasAssociationMixin<bsb_private_contests, bsb_private_contestsId>;
  hasBsb_private_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_private_contests, bsb_private_contestsId>;
  countBsb_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bsb_fixtures hasMany bsb_squads via fixture_id
  bsb_squads!: bsb_squads[];
  getBsb_squads!: Sequelize.HasManyGetAssociationsMixin<bsb_squads>;
  setBsb_squads!: Sequelize.HasManySetAssociationsMixin<bsb_squads, bsb_squadsId>;
  addBsb_squad!: Sequelize.HasManyAddAssociationMixin<bsb_squads, bsb_squadsId>;
  addBsb_squads!: Sequelize.HasManyAddAssociationsMixin<bsb_squads, bsb_squadsId>;
  createBsb_squad!: Sequelize.HasManyCreateAssociationMixin<bsb_squads>;
  removeBsb_squad!: Sequelize.HasManyRemoveAssociationMixin<bsb_squads, bsb_squadsId>;
  removeBsb_squads!: Sequelize.HasManyRemoveAssociationsMixin<bsb_squads, bsb_squadsId>;
  hasBsb_squad!: Sequelize.HasManyHasAssociationMixin<bsb_squads, bsb_squadsId>;
  hasBsb_squads!: Sequelize.HasManyHasAssociationsMixin<bsb_squads, bsb_squadsId>;
  countBsb_squads!: Sequelize.HasManyCountAssociationsMixin;
  // bsb_fixtures hasMany bsb_user_teams via fixture_id
  bsb_user_teams!: bsb_user_teams[];
  getBsb_user_teams!: Sequelize.HasManyGetAssociationsMixin<bsb_user_teams>;
  setBsb_user_teams!: Sequelize.HasManySetAssociationsMixin<bsb_user_teams, bsb_user_teamsId>;
  addBsb_user_team!: Sequelize.HasManyAddAssociationMixin<bsb_user_teams, bsb_user_teamsId>;
  addBsb_user_teams!: Sequelize.HasManyAddAssociationsMixin<bsb_user_teams, bsb_user_teamsId>;
  createBsb_user_team!: Sequelize.HasManyCreateAssociationMixin<bsb_user_teams>;
  removeBsb_user_team!: Sequelize.HasManyRemoveAssociationMixin<bsb_user_teams, bsb_user_teamsId>;
  removeBsb_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<bsb_user_teams, bsb_user_teamsId>;
  hasBsb_user_team!: Sequelize.HasManyHasAssociationMixin<bsb_user_teams, bsb_user_teamsId>;
  hasBsb_user_teams!: Sequelize.HasManyHasAssociationsMixin<bsb_user_teams, bsb_user_teamsId>;
  countBsb_user_teams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_fixtures {
    return sequelize.define('bsb_fixtures', {
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
        model: 'bsb_competitions',
        key: 'id'
      }
    },
    competition_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_innings: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'bsb_fixtures',
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
  }) as typeof bsb_fixtures;
  }
}
