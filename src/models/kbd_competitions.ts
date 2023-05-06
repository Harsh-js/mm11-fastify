import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_fixtures, kbd_fixturesId } from './kbd_fixtures';
import type { kbd_leaderboards, kbd_leaderboardsId } from './kbd_leaderboards';

export interface kbd_competitionsAttributes {
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

export type kbd_competitionsPk = "id";
export type kbd_competitionsId = kbd_competitions[kbd_competitionsPk];
export type kbd_competitionsOptionalAttributes = "id" | "is_active" | "is_leaderboard" | "prize_breakup" | "influencer_prize_breakup" | "created_at" | "updated_at";
export type kbd_competitionsCreationAttributes = Optional<kbd_competitionsAttributes, kbd_competitionsOptionalAttributes>;

export class kbd_competitions extends Model<kbd_competitionsAttributes, kbd_competitionsCreationAttributes> implements kbd_competitionsAttributes {
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

  // kbd_competitions hasMany kbd_fixtures via competition_id
  kbd_fixtures!: kbd_fixtures[];
  getKbd_fixtures!: Sequelize.HasManyGetAssociationsMixin<kbd_fixtures>;
  setKbd_fixtures!: Sequelize.HasManySetAssociationsMixin<kbd_fixtures, kbd_fixturesId>;
  addKbd_fixture!: Sequelize.HasManyAddAssociationMixin<kbd_fixtures, kbd_fixturesId>;
  addKbd_fixtures!: Sequelize.HasManyAddAssociationsMixin<kbd_fixtures, kbd_fixturesId>;
  createKbd_fixture!: Sequelize.HasManyCreateAssociationMixin<kbd_fixtures>;
  removeKbd_fixture!: Sequelize.HasManyRemoveAssociationMixin<kbd_fixtures, kbd_fixturesId>;
  removeKbd_fixtures!: Sequelize.HasManyRemoveAssociationsMixin<kbd_fixtures, kbd_fixturesId>;
  hasKbd_fixture!: Sequelize.HasManyHasAssociationMixin<kbd_fixtures, kbd_fixturesId>;
  hasKbd_fixtures!: Sequelize.HasManyHasAssociationsMixin<kbd_fixtures, kbd_fixturesId>;
  countKbd_fixtures!: Sequelize.HasManyCountAssociationsMixin;
  // kbd_competitions hasMany kbd_leaderboards via competition_id
  kbd_leaderboards!: kbd_leaderboards[];
  getKbd_leaderboards!: Sequelize.HasManyGetAssociationsMixin<kbd_leaderboards>;
  setKbd_leaderboards!: Sequelize.HasManySetAssociationsMixin<kbd_leaderboards, kbd_leaderboardsId>;
  addKbd_leaderboard!: Sequelize.HasManyAddAssociationMixin<kbd_leaderboards, kbd_leaderboardsId>;
  addKbd_leaderboards!: Sequelize.HasManyAddAssociationsMixin<kbd_leaderboards, kbd_leaderboardsId>;
  createKbd_leaderboard!: Sequelize.HasManyCreateAssociationMixin<kbd_leaderboards>;
  removeKbd_leaderboard!: Sequelize.HasManyRemoveAssociationMixin<kbd_leaderboards, kbd_leaderboardsId>;
  removeKbd_leaderboards!: Sequelize.HasManyRemoveAssociationsMixin<kbd_leaderboards, kbd_leaderboardsId>;
  hasKbd_leaderboard!: Sequelize.HasManyHasAssociationMixin<kbd_leaderboards, kbd_leaderboardsId>;
  hasKbd_leaderboards!: Sequelize.HasManyHasAssociationsMixin<kbd_leaderboards, kbd_leaderboardsId>;
  countKbd_leaderboards!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_competitions {
    return sequelize.define('kbd_competitions', {
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
    tableName: 'kbd_competitions',
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
  }) as typeof kbd_competitions;
  }
}
