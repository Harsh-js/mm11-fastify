import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fixtures, fixturesId } from './fixtures';
import type { investment_leaderboard, investment_leaderboardId } from './investment_leaderboard';
import type { investment_leaderboards, investment_leaderboardsId } from './investment_leaderboards';
import type { leaderboard_weeks, leaderboard_weeksId } from './leaderboard_weeks';
import type { leaderboards, leaderboardsId } from './leaderboards';

export interface competitionsAttributes {
  id: number;
  title: string;
  season: string;
  datestart: string;
  dateend: string;
  category: string;
  match_format: string;
  is_active: number;
  status: string;
  is_leaderboard: number;
  is_leaderboard_weeks: number;
  influncer_leaderboard: number;
  prize_breakup?: object;
  influencer_prize_breakup?: object;
  created_at?: Date;
  updated_at?: Date;
}

export type competitionsPk = "id";
export type competitionsId = competitions[competitionsPk];
export type competitionsOptionalAttributes = "id" | "is_active" | "is_leaderboard" | "is_leaderboard_weeks" | "influncer_leaderboard" | "prize_breakup" | "influencer_prize_breakup" | "created_at" | "updated_at";
export type competitionsCreationAttributes = Optional<competitionsAttributes, competitionsOptionalAttributes>;

export class competitions extends Model<competitionsAttributes, competitionsCreationAttributes> implements competitionsAttributes {
  id!: number;
  title!: string;
  season!: string;
  datestart!: string;
  dateend!: string;
  category!: string;
  match_format!: string;
  is_active!: number;
  status!: string;
  is_leaderboard!: number;
  is_leaderboard_weeks!: number;
  influncer_leaderboard!: number;
  prize_breakup?: object;
  influencer_prize_breakup?: object;
  created_at?: Date;
  updated_at?: Date;

  // competitions hasMany fixtures via competition_id
  fixtures!: fixtures[];
  getFixtures!: Sequelize.HasManyGetAssociationsMixin<fixtures>;
  setFixtures!: Sequelize.HasManySetAssociationsMixin<fixtures, fixturesId>;
  addFixture!: Sequelize.HasManyAddAssociationMixin<fixtures, fixturesId>;
  addFixtures!: Sequelize.HasManyAddAssociationsMixin<fixtures, fixturesId>;
  createFixture!: Sequelize.HasManyCreateAssociationMixin<fixtures>;
  removeFixture!: Sequelize.HasManyRemoveAssociationMixin<fixtures, fixturesId>;
  removeFixtures!: Sequelize.HasManyRemoveAssociationsMixin<fixtures, fixturesId>;
  hasFixture!: Sequelize.HasManyHasAssociationMixin<fixtures, fixturesId>;
  hasFixtures!: Sequelize.HasManyHasAssociationsMixin<fixtures, fixturesId>;
  countFixtures!: Sequelize.HasManyCountAssociationsMixin;
  // competitions hasMany investment_leaderboard via competition_id
  investment_leaderboards!: investment_leaderboard[];
  getInvestment_leaderboards!: Sequelize.HasManyGetAssociationsMixin<investment_leaderboard>;
  setInvestment_leaderboards!: Sequelize.HasManySetAssociationsMixin<investment_leaderboard, investment_leaderboardId>;
  addInvestment_leaderboard!: Sequelize.HasManyAddAssociationMixin<investment_leaderboard, investment_leaderboardId>;
  addInvestment_leaderboards!: Sequelize.HasManyAddAssociationsMixin<investment_leaderboard, investment_leaderboardId>;
  createInvestment_leaderboard!: Sequelize.HasManyCreateAssociationMixin<investment_leaderboard>;
  removeInvestment_leaderboard!: Sequelize.HasManyRemoveAssociationMixin<investment_leaderboard, investment_leaderboardId>;
  removeInvestment_leaderboards!: Sequelize.HasManyRemoveAssociationsMixin<investment_leaderboard, investment_leaderboardId>;
  hasInvestment_leaderboard!: Sequelize.HasManyHasAssociationMixin<investment_leaderboard, investment_leaderboardId>;
  hasInvestment_leaderboards!: Sequelize.HasManyHasAssociationsMixin<investment_leaderboard, investment_leaderboardId>;
  countInvestment_leaderboards!: Sequelize.HasManyCountAssociationsMixin;
  // competitions hasMany investment_leaderboards via competition_id
  competition_investment_leaderboards!: investment_leaderboards[];
  getCompetition_investment_leaderboards!: Sequelize.HasManyGetAssociationsMixin<investment_leaderboards>;
  setCompetition_investment_leaderboards!: Sequelize.HasManySetAssociationsMixin<investment_leaderboards, investment_leaderboardsId>;
  addCompetition_investment_leaderboard!: Sequelize.HasManyAddAssociationMixin<investment_leaderboards, investment_leaderboardsId>;
  addCompetition_investment_leaderboards!: Sequelize.HasManyAddAssociationsMixin<investment_leaderboards, investment_leaderboardsId>;
  createCompetition_investment_leaderboard!: Sequelize.HasManyCreateAssociationMixin<investment_leaderboards>;
  removeCompetition_investment_leaderboard!: Sequelize.HasManyRemoveAssociationMixin<investment_leaderboards, investment_leaderboardsId>;
  removeCompetition_investment_leaderboards!: Sequelize.HasManyRemoveAssociationsMixin<investment_leaderboards, investment_leaderboardsId>;
  hasCompetition_investment_leaderboard!: Sequelize.HasManyHasAssociationMixin<investment_leaderboards, investment_leaderboardsId>;
  hasCompetition_investment_leaderboards!: Sequelize.HasManyHasAssociationsMixin<investment_leaderboards, investment_leaderboardsId>;
  countCompetition_investment_leaderboards!: Sequelize.HasManyCountAssociationsMixin;
  // competitions hasMany leaderboard_weeks via competition_id
  leaderboard_weeks!: leaderboard_weeks[];
  getLeaderboard_weeks!: Sequelize.HasManyGetAssociationsMixin<leaderboard_weeks>;
  setLeaderboard_weeks!: Sequelize.HasManySetAssociationsMixin<leaderboard_weeks, leaderboard_weeksId>;
  addLeaderboard_week!: Sequelize.HasManyAddAssociationMixin<leaderboard_weeks, leaderboard_weeksId>;
  addLeaderboard_weeks!: Sequelize.HasManyAddAssociationsMixin<leaderboard_weeks, leaderboard_weeksId>;
  createLeaderboard_week!: Sequelize.HasManyCreateAssociationMixin<leaderboard_weeks>;
  removeLeaderboard_week!: Sequelize.HasManyRemoveAssociationMixin<leaderboard_weeks, leaderboard_weeksId>;
  removeLeaderboard_weeks!: Sequelize.HasManyRemoveAssociationsMixin<leaderboard_weeks, leaderboard_weeksId>;
  hasLeaderboard_week!: Sequelize.HasManyHasAssociationMixin<leaderboard_weeks, leaderboard_weeksId>;
  hasLeaderboard_weeks!: Sequelize.HasManyHasAssociationsMixin<leaderboard_weeks, leaderboard_weeksId>;
  countLeaderboard_weeks!: Sequelize.HasManyCountAssociationsMixin;
  // competitions hasMany leaderboards via competition_id
  leaderboards!: leaderboards[];
  getLeaderboards!: Sequelize.HasManyGetAssociationsMixin<leaderboards>;
  setLeaderboards!: Sequelize.HasManySetAssociationsMixin<leaderboards, leaderboardsId>;
  addLeaderboard!: Sequelize.HasManyAddAssociationMixin<leaderboards, leaderboardsId>;
  addLeaderboards!: Sequelize.HasManyAddAssociationsMixin<leaderboards, leaderboardsId>;
  createLeaderboard!: Sequelize.HasManyCreateAssociationMixin<leaderboards>;
  removeLeaderboard!: Sequelize.HasManyRemoveAssociationMixin<leaderboards, leaderboardsId>;
  removeLeaderboards!: Sequelize.HasManyRemoveAssociationsMixin<leaderboards, leaderboardsId>;
  hasLeaderboard!: Sequelize.HasManyHasAssociationMixin<leaderboards, leaderboardsId>;
  hasLeaderboards!: Sequelize.HasManyHasAssociationsMixin<leaderboards, leaderboardsId>;
  countLeaderboards!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof competitions {
    return sequelize.define('competitions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    season: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    datestart: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dateend: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    match_format: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_leaderboard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_leaderboard_weeks: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    influncer_leaderboard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    prize_breakup: {
      type: DataTypes.JSON,
      allowNull: true
    },
    influencer_prize_breakup: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'competitions',
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
    ]
  }) as typeof competitions;
  }
}
