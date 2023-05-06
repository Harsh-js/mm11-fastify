import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_fixtures, bsb_fixturesId } from './bsb_fixtures';

export interface bsb_competitionsAttributes {
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

export type bsb_competitionsPk = "id";
export type bsb_competitionsId = bsb_competitions[bsb_competitionsPk];
export type bsb_competitionsOptionalAttributes = "id" | "is_active" | "is_leaderboard" | "prize_breakup" | "influencer_prize_breakup" | "created_at" | "updated_at";
export type bsb_competitionsCreationAttributes = Optional<bsb_competitionsAttributes, bsb_competitionsOptionalAttributes>;

export class bsb_competitions extends Model<bsb_competitionsAttributes, bsb_competitionsCreationAttributes> implements bsb_competitionsAttributes {
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

  // bsb_competitions hasMany bsb_fixtures via competition_id
  bsb_fixtures!: bsb_fixtures[];
  getBsb_fixtures!: Sequelize.HasManyGetAssociationsMixin<bsb_fixtures>;
  setBsb_fixtures!: Sequelize.HasManySetAssociationsMixin<bsb_fixtures, bsb_fixturesId>;
  addBsb_fixture!: Sequelize.HasManyAddAssociationMixin<bsb_fixtures, bsb_fixturesId>;
  addBsb_fixtures!: Sequelize.HasManyAddAssociationsMixin<bsb_fixtures, bsb_fixturesId>;
  createBsb_fixture!: Sequelize.HasManyCreateAssociationMixin<bsb_fixtures>;
  removeBsb_fixture!: Sequelize.HasManyRemoveAssociationMixin<bsb_fixtures, bsb_fixturesId>;
  removeBsb_fixtures!: Sequelize.HasManyRemoveAssociationsMixin<bsb_fixtures, bsb_fixturesId>;
  hasBsb_fixture!: Sequelize.HasManyHasAssociationMixin<bsb_fixtures, bsb_fixturesId>;
  hasBsb_fixtures!: Sequelize.HasManyHasAssociationsMixin<bsb_fixtures, bsb_fixturesId>;
  countBsb_fixtures!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_competitions {
    return sequelize.define('bsb_competitions', {
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
    tableName: 'bsb_competitions',
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
    ]
  }) as typeof bsb_competitions;
  }
}
