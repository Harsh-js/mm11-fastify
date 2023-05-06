import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_fixtures, bkb_fixturesId } from './bkb_fixtures';

export interface bkb_competitionsAttributes {
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

export type bkb_competitionsPk = "id";
export type bkb_competitionsId = bkb_competitions[bkb_competitionsPk];
export type bkb_competitionsOptionalAttributes = "id" | "is_active" | "is_leaderboard" | "prize_breakup" | "influencer_prize_breakup" | "created_at" | "updated_at";
export type bkb_competitionsCreationAttributes = Optional<bkb_competitionsAttributes, bkb_competitionsOptionalAttributes>;

export class bkb_competitions extends Model<bkb_competitionsAttributes, bkb_competitionsCreationAttributes> implements bkb_competitionsAttributes {
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

  // bkb_competitions hasMany bkb_fixtures via competition_id
  bkb_fixtures!: bkb_fixtures[];
  getBkb_fixtures!: Sequelize.HasManyGetAssociationsMixin<bkb_fixtures>;
  setBkb_fixtures!: Sequelize.HasManySetAssociationsMixin<bkb_fixtures, bkb_fixturesId>;
  addBkb_fixture!: Sequelize.HasManyAddAssociationMixin<bkb_fixtures, bkb_fixturesId>;
  addBkb_fixtures!: Sequelize.HasManyAddAssociationsMixin<bkb_fixtures, bkb_fixturesId>;
  createBkb_fixture!: Sequelize.HasManyCreateAssociationMixin<bkb_fixtures>;
  removeBkb_fixture!: Sequelize.HasManyRemoveAssociationMixin<bkb_fixtures, bkb_fixturesId>;
  removeBkb_fixtures!: Sequelize.HasManyRemoveAssociationsMixin<bkb_fixtures, bkb_fixturesId>;
  hasBkb_fixture!: Sequelize.HasManyHasAssociationMixin<bkb_fixtures, bkb_fixturesId>;
  hasBkb_fixtures!: Sequelize.HasManyHasAssociationsMixin<bkb_fixtures, bkb_fixturesId>;
  countBkb_fixtures!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_competitions {
    return sequelize.define('bkb_competitions', {
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
    tableName: 'bkb_competitions',
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
  }) as typeof bkb_competitions;
  }
}
