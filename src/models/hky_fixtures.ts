import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hky_competitions, hky_competitionsId } from './hky_competitions';
import type { hky_contests, hky_contestsId } from './hky_contests';
import type { hky_private_contests, hky_private_contestsId } from './hky_private_contests';
import type { hky_squads, hky_squadsId } from './hky_squads';
import type { hky_user_teams, hky_user_teamsId } from './hky_user_teams';

export interface hky_fixturesAttributes {
  id: number;
  name: string;
  competition_id: number;
  competition_name: string;
  inning_number: number;
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

export type hky_fixturesPk = "id";
export type hky_fixturesId = hky_fixtures[hky_fixturesPk];
export type hky_fixturesOptionalAttributes = "id" | "inning_number" | "total_innings" | "payment_data" | "payment_data_all" | "teama_image" | "teama_color" | "teama_score" | "teama_short_name" | "teamb_color" | "teamb_score" | "teamb_short_name" | "teamb_image" | "format" | "format_str" | "starting_at" | "ending_at" | "cancel_allow" | "is_active" | "lineup_announced" | "status" | "sequence_by" | "allow_prize_distribution" | "status_note" | "admin_time_change" | "is_cancelled" | "is_rank_updated" | "last_squad_update" | "mega_value" | "created_at" | "updated_at";
export type hky_fixturesCreationAttributes = Optional<hky_fixturesAttributes, hky_fixturesOptionalAttributes>;

export class hky_fixtures extends Model<hky_fixturesAttributes, hky_fixturesCreationAttributes> implements hky_fixturesAttributes {
  id!: number;
  name!: string;
  competition_id!: number;
  competition_name!: string;
  inning_number!: number;
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

  // hky_fixtures belongsTo hky_competitions via competition_id
  competition!: hky_competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<hky_competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<hky_competitions, hky_competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<hky_competitions>;
  // hky_fixtures hasMany hky_contests via fixture_id
  hky_contests!: hky_contests[];
  getHky_contests!: Sequelize.HasManyGetAssociationsMixin<hky_contests>;
  setHky_contests!: Sequelize.HasManySetAssociationsMixin<hky_contests, hky_contestsId>;
  addHky_contest!: Sequelize.HasManyAddAssociationMixin<hky_contests, hky_contestsId>;
  addHky_contests!: Sequelize.HasManyAddAssociationsMixin<hky_contests, hky_contestsId>;
  createHky_contest!: Sequelize.HasManyCreateAssociationMixin<hky_contests>;
  removeHky_contest!: Sequelize.HasManyRemoveAssociationMixin<hky_contests, hky_contestsId>;
  removeHky_contests!: Sequelize.HasManyRemoveAssociationsMixin<hky_contests, hky_contestsId>;
  hasHky_contest!: Sequelize.HasManyHasAssociationMixin<hky_contests, hky_contestsId>;
  hasHky_contests!: Sequelize.HasManyHasAssociationsMixin<hky_contests, hky_contestsId>;
  countHky_contests!: Sequelize.HasManyCountAssociationsMixin;
  // hky_fixtures hasMany hky_private_contests via fixture_id
  hky_private_contests!: hky_private_contests[];
  getHky_private_contests!: Sequelize.HasManyGetAssociationsMixin<hky_private_contests>;
  setHky_private_contests!: Sequelize.HasManySetAssociationsMixin<hky_private_contests, hky_private_contestsId>;
  addHky_private_contest!: Sequelize.HasManyAddAssociationMixin<hky_private_contests, hky_private_contestsId>;
  addHky_private_contests!: Sequelize.HasManyAddAssociationsMixin<hky_private_contests, hky_private_contestsId>;
  createHky_private_contest!: Sequelize.HasManyCreateAssociationMixin<hky_private_contests>;
  removeHky_private_contest!: Sequelize.HasManyRemoveAssociationMixin<hky_private_contests, hky_private_contestsId>;
  removeHky_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<hky_private_contests, hky_private_contestsId>;
  hasHky_private_contest!: Sequelize.HasManyHasAssociationMixin<hky_private_contests, hky_private_contestsId>;
  hasHky_private_contests!: Sequelize.HasManyHasAssociationsMixin<hky_private_contests, hky_private_contestsId>;
  countHky_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // hky_fixtures hasMany hky_squads via fixture_id
  hky_squads!: hky_squads[];
  getHky_squads!: Sequelize.HasManyGetAssociationsMixin<hky_squads>;
  setHky_squads!: Sequelize.HasManySetAssociationsMixin<hky_squads, hky_squadsId>;
  addHky_squad!: Sequelize.HasManyAddAssociationMixin<hky_squads, hky_squadsId>;
  addHky_squads!: Sequelize.HasManyAddAssociationsMixin<hky_squads, hky_squadsId>;
  createHky_squad!: Sequelize.HasManyCreateAssociationMixin<hky_squads>;
  removeHky_squad!: Sequelize.HasManyRemoveAssociationMixin<hky_squads, hky_squadsId>;
  removeHky_squads!: Sequelize.HasManyRemoveAssociationsMixin<hky_squads, hky_squadsId>;
  hasHky_squad!: Sequelize.HasManyHasAssociationMixin<hky_squads, hky_squadsId>;
  hasHky_squads!: Sequelize.HasManyHasAssociationsMixin<hky_squads, hky_squadsId>;
  countHky_squads!: Sequelize.HasManyCountAssociationsMixin;
  // hky_fixtures hasMany hky_user_teams via fixture_id
  hky_user_teams!: hky_user_teams[];
  getHky_user_teams!: Sequelize.HasManyGetAssociationsMixin<hky_user_teams>;
  setHky_user_teams!: Sequelize.HasManySetAssociationsMixin<hky_user_teams, hky_user_teamsId>;
  addHky_user_team!: Sequelize.HasManyAddAssociationMixin<hky_user_teams, hky_user_teamsId>;
  addHky_user_teams!: Sequelize.HasManyAddAssociationsMixin<hky_user_teams, hky_user_teamsId>;
  createHky_user_team!: Sequelize.HasManyCreateAssociationMixin<hky_user_teams>;
  removeHky_user_team!: Sequelize.HasManyRemoveAssociationMixin<hky_user_teams, hky_user_teamsId>;
  removeHky_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<hky_user_teams, hky_user_teamsId>;
  hasHky_user_team!: Sequelize.HasManyHasAssociationMixin<hky_user_teams, hky_user_teamsId>;
  hasHky_user_teams!: Sequelize.HasManyHasAssociationsMixin<hky_user_teams, hky_user_teamsId>;
  countHky_user_teams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_fixtures {
    return sequelize.define('hky_fixtures', {
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
        model: 'hky_competitions',
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
    tableName: 'hky_fixtures',
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
  }) as typeof hky_fixtures;
  }
}
