import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hky_fixtures, hky_fixturesId } from './hky_fixtures';

export interface hky_competitionsAttributes {
  id: number;
  title: string;
  season: string;
  datestart: string;
  dateend: string;
  is_active: number;
  status: string;
  is_leaderboard: number;
  prize_breakup?: string;
  influencer_prize_breakup?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type hky_competitionsPk = "id";
export type hky_competitionsId = hky_competitions[hky_competitionsPk];
export type hky_competitionsOptionalAttributes = "id" | "is_active" | "is_leaderboard" | "prize_breakup" | "influencer_prize_breakup" | "created_at" | "updated_at";
export type hky_competitionsCreationAttributes = Optional<hky_competitionsAttributes, hky_competitionsOptionalAttributes>;

export class hky_competitions extends Model<hky_competitionsAttributes, hky_competitionsCreationAttributes> implements hky_competitionsAttributes {
  id!: number;
  title!: string;
  season!: string;
  datestart!: string;
  dateend!: string;
  is_active!: number;
  status!: string;
  is_leaderboard!: number;
  prize_breakup?: string;
  influencer_prize_breakup?: string;
  created_at?: Date;
  updated_at?: Date;

  // hky_competitions hasMany hky_fixtures via competition_id
  hky_fixtures!: hky_fixtures[];
  getHky_fixtures!: Sequelize.HasManyGetAssociationsMixin<hky_fixtures>;
  setHky_fixtures!: Sequelize.HasManySetAssociationsMixin<hky_fixtures, hky_fixturesId>;
  addHky_fixture!: Sequelize.HasManyAddAssociationMixin<hky_fixtures, hky_fixturesId>;
  addHky_fixtures!: Sequelize.HasManyAddAssociationsMixin<hky_fixtures, hky_fixturesId>;
  createHky_fixture!: Sequelize.HasManyCreateAssociationMixin<hky_fixtures>;
  removeHky_fixture!: Sequelize.HasManyRemoveAssociationMixin<hky_fixtures, hky_fixturesId>;
  removeHky_fixtures!: Sequelize.HasManyRemoveAssociationsMixin<hky_fixtures, hky_fixturesId>;
  hasHky_fixture!: Sequelize.HasManyHasAssociationMixin<hky_fixtures, hky_fixturesId>;
  hasHky_fixtures!: Sequelize.HasManyHasAssociationsMixin<hky_fixtures, hky_fixturesId>;
  countHky_fixtures!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_competitions {
    return sequelize.define('hky_competitions', {
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
    },
    influencer_prize_breakup: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'hky_competitions',
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
  }) as typeof hky_competitions;
  }
}
