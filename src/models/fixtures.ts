import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { competitions, competitionsId } from './competitions';
import type { contests, contestsId } from './contests';
import type { private_contests, private_contestsId } from './private_contests';
import type { squads, squadsId } from './squads';
import type { user_teams, user_teamsId } from './user_teams';

export interface fixturesAttributes {
  id: number;
  name: string;
  competition_id?: number;
  competition_name: string;
  inning_number?: number;
  completed_inning_number: number;
  total_innings?: number;
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
  format: string;
  format_str: string;
  starting_at?: Date;
  ending_at?: Date;
  inning_starting_at?: Date;
  verified: number;
  pre_squad: number;
  is_active: number;
  is_leaderboard: number;
  lineup_announced: number;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  allow_prize_distribution: number;
  cancel_allow: number;
  sequence_by: number;
  admin_time_change?: number;
  is_cancelled: number;
  is_rank_updated: number;
  status_note?: string;
  last_squad_update?: Date;
  mega_value?: number;
  mega_prize_img?: string;
  free_value: number;
  created_at?: Date;
  updated_at?: Date;
}

export type fixturesPk = "id";
export type fixturesId = fixtures[fixturesPk];
export type fixturesOptionalAttributes = "id" | "competition_id" | "inning_number" | "completed_inning_number" | "total_innings" | "payment_data" | "payment_data_all" | "teama_image" | "teama_color" | "teama_score" | "teama_short_name" | "teamb_image" | "teamb_color" | "teamb_score" | "teamb_short_name" | "starting_at" | "ending_at" | "inning_starting_at" | "pre_squad" | "is_active" | "is_leaderboard" | "lineup_announced" | "status" | "allow_prize_distribution" | "cancel_allow" | "sequence_by" | "admin_time_change" | "is_cancelled" | "is_rank_updated" | "status_note" | "last_squad_update" | "mega_value" | "mega_prize_img" | "free_value" | "created_at" | "updated_at";
export type fixturesCreationAttributes = Optional<fixturesAttributes, fixturesOptionalAttributes>;

export class fixtures extends Model<fixturesAttributes, fixturesCreationAttributes> implements fixturesAttributes {
  id!: number;
  name!: string;
  competition_id?: number;
  competition_name!: string;
  inning_number?: number;
  completed_inning_number!: number;
  total_innings?: number;
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
  format!: string;
  format_str!: string;
  starting_at?: Date;
  ending_at?: Date;
  inning_starting_at?: Date;
  verified!: number;
  pre_squad!: number;
  is_active!: number;
  is_leaderboard!: number;
  lineup_announced!: number;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  allow_prize_distribution!: number;
  cancel_allow!: number;
  sequence_by!: number;
  admin_time_change?: number;
  is_cancelled!: number;
  is_rank_updated!: number;
  status_note?: string;
  last_squad_update?: Date;
  mega_value?: number;
  mega_prize_img?: string;
  free_value!: number;
  created_at?: Date;
  updated_at?: Date;

  // fixtures belongsTo competitions via competition_id
  competition!: competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<competitions, competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<competitions>;
  // fixtures hasMany contests via fixture_id
  contests!: contests[];
  getContests!: Sequelize.HasManyGetAssociationsMixin<contests>;
  setContests!: Sequelize.HasManySetAssociationsMixin<contests, contestsId>;
  addContest!: Sequelize.HasManyAddAssociationMixin<contests, contestsId>;
  addContests!: Sequelize.HasManyAddAssociationsMixin<contests, contestsId>;
  createContest!: Sequelize.HasManyCreateAssociationMixin<contests>;
  removeContest!: Sequelize.HasManyRemoveAssociationMixin<contests, contestsId>;
  removeContests!: Sequelize.HasManyRemoveAssociationsMixin<contests, contestsId>;
  hasContest!: Sequelize.HasManyHasAssociationMixin<contests, contestsId>;
  hasContests!: Sequelize.HasManyHasAssociationsMixin<contests, contestsId>;
  countContests!: Sequelize.HasManyCountAssociationsMixin;
  // fixtures hasMany private_contests via fixture_id
  private_contests!: private_contests[];
  getPrivate_contests!: Sequelize.HasManyGetAssociationsMixin<private_contests>;
  setPrivate_contests!: Sequelize.HasManySetAssociationsMixin<private_contests, private_contestsId>;
  addPrivate_contest!: Sequelize.HasManyAddAssociationMixin<private_contests, private_contestsId>;
  addPrivate_contests!: Sequelize.HasManyAddAssociationsMixin<private_contests, private_contestsId>;
  createPrivate_contest!: Sequelize.HasManyCreateAssociationMixin<private_contests>;
  removePrivate_contest!: Sequelize.HasManyRemoveAssociationMixin<private_contests, private_contestsId>;
  removePrivate_contests!: Sequelize.HasManyRemoveAssociationsMixin<private_contests, private_contestsId>;
  hasPrivate_contest!: Sequelize.HasManyHasAssociationMixin<private_contests, private_contestsId>;
  hasPrivate_contests!: Sequelize.HasManyHasAssociationsMixin<private_contests, private_contestsId>;
  countPrivate_contests!: Sequelize.HasManyCountAssociationsMixin;
  // fixtures hasMany squads via fixture_id
  squads!: squads[];
  getSquads!: Sequelize.HasManyGetAssociationsMixin<squads>;
  setSquads!: Sequelize.HasManySetAssociationsMixin<squads, squadsId>;
  addSquad!: Sequelize.HasManyAddAssociationMixin<squads, squadsId>;
  addSquads!: Sequelize.HasManyAddAssociationsMixin<squads, squadsId>;
  createSquad!: Sequelize.HasManyCreateAssociationMixin<squads>;
  removeSquad!: Sequelize.HasManyRemoveAssociationMixin<squads, squadsId>;
  removeSquads!: Sequelize.HasManyRemoveAssociationsMixin<squads, squadsId>;
  hasSquad!: Sequelize.HasManyHasAssociationMixin<squads, squadsId>;
  hasSquads!: Sequelize.HasManyHasAssociationsMixin<squads, squadsId>;
  countSquads!: Sequelize.HasManyCountAssociationsMixin;
  // fixtures hasMany user_teams via fixture_id
  user_teams!: user_teams[];
  getUser_teams!: Sequelize.HasManyGetAssociationsMixin<user_teams>;
  setUser_teams!: Sequelize.HasManySetAssociationsMixin<user_teams, user_teamsId>;
  addUser_team!: Sequelize.HasManyAddAssociationMixin<user_teams, user_teamsId>;
  addUser_teams!: Sequelize.HasManyAddAssociationsMixin<user_teams, user_teamsId>;
  createUser_team!: Sequelize.HasManyCreateAssociationMixin<user_teams>;
  removeUser_team!: Sequelize.HasManyRemoveAssociationMixin<user_teams, user_teamsId>;
  removeUser_teams!: Sequelize.HasManyRemoveAssociationsMixin<user_teams, user_teamsId>;
  hasUser_team!: Sequelize.HasManyHasAssociationMixin<user_teams, user_teamsId>;
  hasUser_teams!: Sequelize.HasManyHasAssociationsMixin<user_teams, user_teamsId>;
  countUser_teams!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof fixtures {
    return sequelize.define('fixtures', {
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
      allowNull: true,
      references: {
        model: 'competitions',
        key: 'id'
      }
    },
    competition_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    completed_inning_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total_innings: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: false
    },
    format_str: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    is_leaderboard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    sequence_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 999
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
    mega_prize_img: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    free_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'fixtures',
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
      {
        name: "ending_at",
        using: "BTREE",
        fields: [
          { name: "ending_at" },
        ]
      },
    ]
  }) as typeof fixtures;
  }
}
