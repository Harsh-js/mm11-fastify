import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_fixtures, ftb_fixturesId } from './ftb_fixtures';
import type { ftb_leaderboards, ftb_leaderboardsId } from './ftb_leaderboards';

export interface ftb_competitionsAttributes {
  id: number;
  title: string;
  season: string;
  datestart: string;
  dateend: string;
  category: string;
  is_active: number;
  status: string;
  is_leaderboard: number;
  prize_breakup?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_competitionsPk = "id";
export type ftb_competitionsId = ftb_competitions[ftb_competitionsPk];
export type ftb_competitionsOptionalAttributes = "id" | "is_active" | "is_leaderboard" | "prize_breakup" | "created_at" | "updated_at";
export type ftb_competitionsCreationAttributes = Optional<ftb_competitionsAttributes, ftb_competitionsOptionalAttributes>;

export class ftb_competitions extends Model<ftb_competitionsAttributes, ftb_competitionsCreationAttributes> implements ftb_competitionsAttributes {
  id!: number;
  title!: string;
  season!: string;
  datestart!: string;
  dateend!: string;
  category!: string;
  is_active!: number;
  status!: string;
  is_leaderboard!: number;
  prize_breakup?: string;
  created_at?: Date;
  updated_at?: Date;

  // ftb_competitions hasMany ftb_fixtures via competition_id
  ftb_fixtures!: ftb_fixtures[];
  getFtb_fixtures!: Sequelize.HasManyGetAssociationsMixin<ftb_fixtures>;
  setFtb_fixtures!: Sequelize.HasManySetAssociationsMixin<ftb_fixtures, ftb_fixturesId>;
  addFtb_fixture!: Sequelize.HasManyAddAssociationMixin<ftb_fixtures, ftb_fixturesId>;
  addFtb_fixtures!: Sequelize.HasManyAddAssociationsMixin<ftb_fixtures, ftb_fixturesId>;
  createFtb_fixture!: Sequelize.HasManyCreateAssociationMixin<ftb_fixtures>;
  removeFtb_fixture!: Sequelize.HasManyRemoveAssociationMixin<ftb_fixtures, ftb_fixturesId>;
  removeFtb_fixtures!: Sequelize.HasManyRemoveAssociationsMixin<ftb_fixtures, ftb_fixturesId>;
  hasFtb_fixture!: Sequelize.HasManyHasAssociationMixin<ftb_fixtures, ftb_fixturesId>;
  hasFtb_fixtures!: Sequelize.HasManyHasAssociationsMixin<ftb_fixtures, ftb_fixturesId>;
  countFtb_fixtures!: Sequelize.HasManyCountAssociationsMixin;
  // ftb_competitions hasMany ftb_leaderboards via competition_id
  ftb_leaderboards!: ftb_leaderboards[];
  getFtb_leaderboards!: Sequelize.HasManyGetAssociationsMixin<ftb_leaderboards>;
  setFtb_leaderboards!: Sequelize.HasManySetAssociationsMixin<ftb_leaderboards, ftb_leaderboardsId>;
  addFtb_leaderboard!: Sequelize.HasManyAddAssociationMixin<ftb_leaderboards, ftb_leaderboardsId>;
  addFtb_leaderboards!: Sequelize.HasManyAddAssociationsMixin<ftb_leaderboards, ftb_leaderboardsId>;
  createFtb_leaderboard!: Sequelize.HasManyCreateAssociationMixin<ftb_leaderboards>;
  removeFtb_leaderboard!: Sequelize.HasManyRemoveAssociationMixin<ftb_leaderboards, ftb_leaderboardsId>;
  removeFtb_leaderboards!: Sequelize.HasManyRemoveAssociationsMixin<ftb_leaderboards, ftb_leaderboardsId>;
  hasFtb_leaderboard!: Sequelize.HasManyHasAssociationMixin<ftb_leaderboards, ftb_leaderboardsId>;
  hasFtb_leaderboards!: Sequelize.HasManyHasAssociationsMixin<ftb_leaderboards, ftb_leaderboardsId>;
  countFtb_leaderboards!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_competitions {
    return sequelize.define('ftb_competitions', {
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
    prize_breakup: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'ftb_competitions',
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
  }) as typeof ftb_competitions;
  }
}
