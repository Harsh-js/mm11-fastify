import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_competitions, ftb_competitionsId } from './ftb_competitions';
import type { ftb_contests, ftb_contestsId } from './ftb_contests';
import type { ftb_private_contests, ftb_private_contestsId } from './ftb_private_contests';
import type { ftb_squads, ftb_squadsId } from './ftb_squads';
import type { ftb_user_teams, ftb_user_teamsId } from './ftb_user_teams';

export interface ftb_fixturesAttributes {
  id: number;
  name: string;
  competition_id: number;
  competition_name: string;
  inning_number: number;
  completed_inning_number: number;
  total_innings: number;
  payment_data?: object;
  payment_data_all?: object;
  season: string;
  teama: string;
  teama_id: string;
  teama_image?: string;
  teama_color?: string;
  teama_score?: string;
  teama_short_name?: string;
  teamb: string;
  teamb_id: string;
  teamb_image?: string;
  teamb_color?: string;
  teamb_score?: string;
  teamb_short_name?: string;
  format?: string;
  format_str?: string;
  starting_at?: Date;
  ending_at?: Date;
  inning_starting_at?: Date;
  verified: number;
  pre_squad: number;
  is_active: number;
  lineup_announced: number;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  allow_prize_distribution: number;
  cancel_allow: number;
  admin_time_change?: number;
  is_cancelled: number;
  is_rank_updated: number;
  status_note?: string;
  last_squad_update?: Date;
  mega_value?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_fixturesPk = "id";
export type ftb_fixturesId = ftb_fixtures[ftb_fixturesPk];
export type ftb_fixturesOptionalAttributes = "id" | "inning_number" | "completed_inning_number" | "total_innings" | "payment_data" | "payment_data_all" | "teama_image" | "teama_color" | "teama_score" | "teama_short_name" | "teamb_image" | "teamb_color" | "teamb_score" | "teamb_short_name" | "format" | "format_str" | "starting_at" | "ending_at" | "inning_starting_at" | "pre_squad" | "is_active" | "lineup_announced" | "status" | "allow_prize_distribution" | "cancel_allow" | "admin_time_change" | "is_cancelled" | "is_rank_updated" | "status_note" | "last_squad_update" | "mega_value" | "created_at" | "updated_at";
export type ftb_fixturesCreationAttributes = Optional<ftb_fixturesAttributes, ftb_fixturesOptionalAttributes>;

export class ftb_fixtures extends Model<ftb_fixturesAttributes, ftb_fixturesCreationAttributes> implements ftb_fixturesAttributes {
  id!: number;
  name!: string;
  competition_id!: number;
  competition_name!: string;
  inning_number!: number;
  completed_inning_number!: number;
  total_innings!: number;
  payment_data?: object;
  payment_data_all?: object;
  season!: string;
  teama!: string;
  teama_id!: string;
  teama_image?: string;
  teama_color?: string;
  teama_score?: string;
  teama_short_name?: string;
  teamb!: string;
  teamb_id!: string;
  teamb_image?: string;
  teamb_color?: string;
  teamb_score?: string;
  teamb_short_name?: string;
  format?: string;
  format_str?: string;
  starting_at?: Date;
  ending_at?: Date;
  inning_starting_at?: Date;
  verified!: number;
  pre_squad!: number;
  is_active!: number;
  lineup_announced!: number;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  allow_prize_distribution!: number;
  cancel_allow!: number;
  admin_time_change?: number;
  is_cancelled!: number;
  is_rank_updated!: number;
  status_note?: string;
  last_squad_update?: Date;
  mega_value?: number;
  created_at?: Date;
  updated_at?: Date;

  // ftb_fixtures belongsTo ftb_competitions via competition_id
  competition!: ftb_competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<ftb_competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<ftb_competitions, ftb_competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<ftb_competitions>;
  // ftb_fixtures hasMany ftb_contests via fixture_id
  ftb_contests!: ftb_contests[];
  getFtb_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_contests>;
  setFtb_contests!: Sequelize.HasManySetAssociationsMixin<ftb_contests, ftb_contestsId>;
  addFtb_contest!: Sequelize.HasManyAddAssociationMixin<ftb_contests, ftb_contestsId>;
  addFtb_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_contests, ftb_contestsId>;
  createFtb_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_contests>;
  removeFtb_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_contests, ftb_contestsId>;
  removeFtb_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_contests, ftb_contestsId>;
  hasFtb_contest!: Sequelize.HasManyHasAssociationMixin<ftb_contests, ftb_contestsId>;
  hasFtb_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_contests, ftb_contestsId>;
  countFtb_contests!: Sequelize.HasManyCountAssociationsMixin;
  // ftb_fixtures hasMany ftb_private_contests via fixture_id
  ftb_private_contests!: ftb_private_contests[];
  getFtb_private_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_private_contests>;
  setFtb_private_contests!: Sequelize.HasManySetAssociationsMixin<ftb_private_contests, ftb_private_contestsId>;
  addFtb_private_contest!: Sequelize.HasManyAddAssociationMixin<ftb_private_contests, ftb_private_contestsId>;
  addFtb_private_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_private_contests, ftb_private_contestsId>;
  createFtb_private_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_private_contests>;
  removeFtb_private_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_private_contests, ftb_private_contestsId>;
  removeFtb_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_private_contests, ftb_private_contestsId>;
  hasFtb_private_contest!: Sequelize.HasManyHasAssociationMixin<ftb_private_contests, ftb_private_contestsId>;
  hasFtb_private_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_private_contests, ftb_private_contestsId>;
  countFtb_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // ftb_fixtures hasMany ftb_squads via fixture_id
  ftb_squads!: ftb_squads[];
  getFtb_squads!: Sequelize.HasManyGetAssociationsMixin<ftb_squads>;
  setFtb_squads!: Sequelize.HasManySetAssociationsMixin<ftb_squads, ftb_squadsId>;
  addFtb_squad!: Sequelize.HasManyAddAssociationMixin<ftb_squads, ftb_squadsId>;
  addFtb_squads!: Sequelize.HasManyAddAssociationsMixin<ftb_squads, ftb_squadsId>;
  createFtb_squad!: Sequelize.HasManyCreateAssociationMixin<ftb_squads>;
  removeFtb_squad!: Sequelize.HasManyRemoveAssociationMixin<ftb_squads, ftb_squadsId>;
  removeFtb_squads!: Sequelize.HasManyRemoveAssociationsMixin<ftb_squads, ftb_squadsId>;
  hasFtb_squad!: Sequelize.HasManyHasAssociationMixin<ftb_squads, ftb_squadsId>;
  hasFtb_squads!: Sequelize.HasManyHasAssociationsMixin<ftb_squads, ftb_squadsId>;
  countFtb_squads!: Sequelize.HasManyCountAssociationsMixin;
  // ftb_fixtures hasMany ftb_user_teams via fixture_id
  ftb_user_teams!: ftb_user_teams[];
  getFtb_user_teams!: Sequelize.HasManyGetAssociationsMixin<ftb_user_teams>;
  setFtb_user_teams!: Sequelize.HasManySetAssociationsMixin<ftb_user_teams, ftb_user_teamsId>;
  addFtb_user_team!: Sequelize.HasManyAddAssociationMixin<ftb_user_teams, ftb_user_teamsId>;
  addFtb_user_teams!: Sequelize.HasManyAddAssociationsMixin<ftb_user_teams, ftb_user_teamsId>;
  createFtb_user_team!: Sequelize.HasManyCreateAssociationMixin<ftb_user_teams>;
  removeFtb_user_team!: Sequelize.HasManyRemoveAssociationMixin<ftb_user_teams, ftb_user_teamsId>;
  removeFtb_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<ftb_user_teams, ftb_user_teamsId>;
  hasFtb_user_team!: Sequelize.HasManyHasAssociationMixin<ftb_user_teams, ftb_user_teamsId>;
  hasFtb_user_teams!: Sequelize.HasManyHasAssociationsMixin<ftb_user_teams, ftb_user_teamsId>;
  countFtb_user_teams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_fixtures {
    return sequelize.define('ftb_fixtures', {
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
        model: 'ftb_competitions',
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
    completed_inning_number: {
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
      type: DataTypes.JSON,
      allowNull: true
    },
    payment_data_all: {
      type: DataTypes.JSON,
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
    teamb_image: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    inning_starting_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    pre_squad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    allow_prize_distribution: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    cancel_allow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    admin_time_change: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_cancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_rank_updated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    status_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_squad_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mega_value: {
      type: DataTypes.BIGINT,
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
    tableName: 'ftb_fixtures',
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
  }) as typeof ftb_fixtures;
  }
}
