import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_competitions, kbd_competitionsId } from './kbd_competitions';
import type { kbd_contests, kbd_contestsId } from './kbd_contests';
import type { kbd_squads, kbd_squadsId } from './kbd_squads';
import type { kbd_user_teams, kbd_user_teamsId } from './kbd_user_teams';

export interface kbd_fixturesAttributes {
  id: number;
  name: string;
  competition_id: number;
  sequence_by?: number;
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
  admin_time_change?: number;
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
  verified: number;
  cancel_allow: number;
  is_cancelled: number;
  is_rank_updated: number;
  pre_squad: number;
  is_active: number;
  lineup_announced: number;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  allow_prize_distribution: number;
  status_note?: string;
  last_squad_update?: Date;
  mega_value?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type kbd_fixturesPk = "id";
export type kbd_fixturesId = kbd_fixtures[kbd_fixturesPk];
export type kbd_fixturesOptionalAttributes = "id" | "sequence_by" | "inning_number" | "total_innings" | "payment_data" | "payment_data_all" | "teama_image" | "teama_color" | "teama_score" | "admin_time_change" | "teama_short_name" | "teamb_image" | "teamb_color" | "teamb_score" | "teamb_short_name" | "format" | "format_str" | "starting_at" | "ending_at" | "cancel_allow" | "is_cancelled" | "is_rank_updated" | "pre_squad" | "is_active" | "lineup_announced" | "status" | "allow_prize_distribution" | "status_note" | "last_squad_update" | "mega_value" | "created_at" | "updated_at";
export type kbd_fixturesCreationAttributes = Optional<kbd_fixturesAttributes, kbd_fixturesOptionalAttributes>;

export class kbd_fixtures extends Model<kbd_fixturesAttributes, kbd_fixturesCreationAttributes> implements kbd_fixturesAttributes {
  id!: number;
  name!: string;
  competition_id!: number;
  sequence_by?: number;
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
  admin_time_change?: number;
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
  verified!: number;
  cancel_allow!: number;
  is_cancelled!: number;
  is_rank_updated!: number;
  pre_squad!: number;
  is_active!: number;
  lineup_announced!: number;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  allow_prize_distribution!: number;
  status_note?: string;
  last_squad_update?: Date;
  mega_value?: number;
  created_at?: Date;
  updated_at?: Date;

  // kbd_fixtures belongsTo kbd_competitions via competition_id
  competition!: kbd_competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<kbd_competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<kbd_competitions, kbd_competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<kbd_competitions>;
  // kbd_fixtures hasMany kbd_contests via fixture_id
  kbd_contests!: kbd_contests[];
  getKbd_contests!: Sequelize.HasManyGetAssociationsMixin<kbd_contests>;
  setKbd_contests!: Sequelize.HasManySetAssociationsMixin<kbd_contests, kbd_contestsId>;
  addKbd_contest!: Sequelize.HasManyAddAssociationMixin<kbd_contests, kbd_contestsId>;
  addKbd_contests!: Sequelize.HasManyAddAssociationsMixin<kbd_contests, kbd_contestsId>;
  createKbd_contest!: Sequelize.HasManyCreateAssociationMixin<kbd_contests>;
  removeKbd_contest!: Sequelize.HasManyRemoveAssociationMixin<kbd_contests, kbd_contestsId>;
  removeKbd_contests!: Sequelize.HasManyRemoveAssociationsMixin<kbd_contests, kbd_contestsId>;
  hasKbd_contest!: Sequelize.HasManyHasAssociationMixin<kbd_contests, kbd_contestsId>;
  hasKbd_contests!: Sequelize.HasManyHasAssociationsMixin<kbd_contests, kbd_contestsId>;
  countKbd_contests!: Sequelize.HasManyCountAssociationsMixin;
  // kbd_fixtures hasMany kbd_squads via fixture_id
  kbd_squads!: kbd_squads[];
  getKbd_squads!: Sequelize.HasManyGetAssociationsMixin<kbd_squads>;
  setKbd_squads!: Sequelize.HasManySetAssociationsMixin<kbd_squads, kbd_squadsId>;
  addKbd_squad!: Sequelize.HasManyAddAssociationMixin<kbd_squads, kbd_squadsId>;
  addKbd_squads!: Sequelize.HasManyAddAssociationsMixin<kbd_squads, kbd_squadsId>;
  createKbd_squad!: Sequelize.HasManyCreateAssociationMixin<kbd_squads>;
  removeKbd_squad!: Sequelize.HasManyRemoveAssociationMixin<kbd_squads, kbd_squadsId>;
  removeKbd_squads!: Sequelize.HasManyRemoveAssociationsMixin<kbd_squads, kbd_squadsId>;
  hasKbd_squad!: Sequelize.HasManyHasAssociationMixin<kbd_squads, kbd_squadsId>;
  hasKbd_squads!: Sequelize.HasManyHasAssociationsMixin<kbd_squads, kbd_squadsId>;
  countKbd_squads!: Sequelize.HasManyCountAssociationsMixin;
  // kbd_fixtures hasMany kbd_user_teams via fixture_id
  kbd_user_teams!: kbd_user_teams[];
  getKbd_user_teams!: Sequelize.HasManyGetAssociationsMixin<kbd_user_teams>;
  setKbd_user_teams!: Sequelize.HasManySetAssociationsMixin<kbd_user_teams, kbd_user_teamsId>;
  addKbd_user_team!: Sequelize.HasManyAddAssociationMixin<kbd_user_teams, kbd_user_teamsId>;
  addKbd_user_teams!: Sequelize.HasManyAddAssociationsMixin<kbd_user_teams, kbd_user_teamsId>;
  createKbd_user_team!: Sequelize.HasManyCreateAssociationMixin<kbd_user_teams>;
  removeKbd_user_team!: Sequelize.HasManyRemoveAssociationMixin<kbd_user_teams, kbd_user_teamsId>;
  removeKbd_user_teams!: Sequelize.HasManyRemoveAssociationsMixin<kbd_user_teams, kbd_user_teamsId>;
  hasKbd_user_team!: Sequelize.HasManyHasAssociationMixin<kbd_user_teams, kbd_user_teamsId>;
  hasKbd_user_teams!: Sequelize.HasManyHasAssociationsMixin<kbd_user_teams, kbd_user_teamsId>;
  countKbd_user_teams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_fixtures {
    return sequelize.define('kbd_fixtures', {
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
        model: 'kbd_competitions',
        key: 'id'
      }
    },
    sequence_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 999
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
    admin_time_change: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
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
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cancel_allow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
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
    }
  }, {
    tableName: 'kbd_fixtures',
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
  }) as typeof kbd_fixtures;
  }
}
