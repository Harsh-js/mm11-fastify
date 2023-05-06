import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_fixtures, bkb_fixturesId } from './bkb_fixtures';
import type { bkb_players, bkb_playersId } from './bkb_players';

export interface bkb_squadsAttributes {
  id: number;
  player_id: number;
  fixture_id: number;
  team?: string;
  team_id: number;
  substitute: number;
  substitute_point: number;
  role?: string;
  playing7: number;
  playing7_point: number;
  fantasy_player_rating: number;
  last_played: number;
  is_active: number;
  points_score: number;
  points_score_point: number;
  rebound: number;
  rebound_point: number;
  assist: number;
  assist_point: number;
  steal: number;
  steal_point: number;
  block: number;
  block_point: number;
  turnover: number;
  turnover_point: number;
  first_inning?: string;
  second_inning?: string;
  total_points: number;
  in_dream_team: number;
  series_point: number;
  created_at?: Date;
  updated_at?: Date;
}

export type bkb_squadsPk = "id";
export type bkb_squadsId = bkb_squads[bkb_squadsPk];
export type bkb_squadsOptionalAttributes = "id" | "team" | "substitute" | "substitute_point" | "role" | "playing7" | "playing7_point" | "fantasy_player_rating" | "last_played" | "is_active" | "points_score" | "points_score_point" | "rebound" | "rebound_point" | "assist" | "assist_point" | "steal" | "steal_point" | "block" | "block_point" | "turnover" | "turnover_point" | "first_inning" | "second_inning" | "total_points" | "in_dream_team" | "series_point" | "created_at" | "updated_at";
export type bkb_squadsCreationAttributes = Optional<bkb_squadsAttributes, bkb_squadsOptionalAttributes>;

export class bkb_squads extends Model<bkb_squadsAttributes, bkb_squadsCreationAttributes> implements bkb_squadsAttributes {
  id!: number;
  player_id!: number;
  fixture_id!: number;
  team?: string;
  team_id!: number;
  substitute!: number;
  substitute_point!: number;
  role?: string;
  playing7!: number;
  playing7_point!: number;
  fantasy_player_rating!: number;
  last_played!: number;
  is_active!: number;
  points_score!: number;
  points_score_point!: number;
  rebound!: number;
  rebound_point!: number;
  assist!: number;
  assist_point!: number;
  steal!: number;
  steal_point!: number;
  block!: number;
  block_point!: number;
  turnover!: number;
  turnover_point!: number;
  first_inning?: string;
  second_inning?: string;
  total_points!: number;
  in_dream_team!: number;
  series_point!: number;
  created_at?: Date;
  updated_at?: Date;

  // bkb_squads belongsTo bkb_fixtures via fixture_id
  fixture!: bkb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<bkb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<bkb_fixtures, bkb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<bkb_fixtures>;
  // bkb_squads belongsTo bkb_players via player_id
  player!: bkb_players;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<bkb_players>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<bkb_players, bkb_playersId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<bkb_players>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_squads {
    return sequelize.define('bkb_squads', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    player_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bkb_players',
        key: 'id'
      }
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bkb_fixtures',
        key: 'id'
      }
    },
    team: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    substitute: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    substitute_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    playing7: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    playing7_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    fantasy_player_rating: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    last_played: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    points_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    points_score_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    rebound: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rebound_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    assist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    assist_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    steal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    steal_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    block: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    block_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    turnover: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    turnover_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    first_inning: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    second_inning: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_points: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    in_dream_team: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    series_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'bkb_squads',
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
        name: "squads_player_id_foreign",
        using: "BTREE",
        fields: [
          { name: "player_id" },
        ]
      },
      {
        name: "squads_fixture_id_foreign",
        using: "BTREE",
        fields: [
          { name: "fixture_id" },
        ]
      },
    ]
  }) as typeof bkb_squads;
  }
}
