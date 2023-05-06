import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_fixtures, bsb_fixturesId } from './bsb_fixtures';
import type { bsb_players, bsb_playersId } from './bsb_players';

export interface bsb_squadsAttributes {
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
  single: number;
  single_point: number;
  double: number;
  double_point: number;
  triple: number;
  triple_point: number;
  home_run: number;
  home_run_point: number;
  runs_batted_in: number;
  runs_batted_in_point: number;
  run_scored: number;
  run_scored_point: number;
  base_on_balls_hitter: number;
  base_on_balls_hitter_point: number;
  stolen_base: number;
  stolen_base_point: number;
  inning_pitched: number;
  inning_pitched_point: number;
  strikeout: number;
  strikeout_point: number;
  earned_run: number;
  earned_run_point: number;
  hit_allowed: number;
  hit_allowed_point: number;
  base_on_balls_pitcher: number;
  base_on_balls_pitcher_point: number;
  first_inning?: string;
  second_inning?: string;
  total_points: number;
  in_dream_team: number;
  series_point: number;
  created_at?: Date;
  updated_at?: Date;
}

export type bsb_squadsPk = "id";
export type bsb_squadsId = bsb_squads[bsb_squadsPk];
export type bsb_squadsOptionalAttributes = "id" | "team" | "substitute" | "substitute_point" | "role" | "playing7" | "playing7_point" | "fantasy_player_rating" | "last_played" | "is_active" | "single" | "single_point" | "double" | "double_point" | "triple" | "triple_point" | "home_run" | "home_run_point" | "runs_batted_in" | "runs_batted_in_point" | "run_scored" | "run_scored_point" | "base_on_balls_hitter" | "base_on_balls_hitter_point" | "stolen_base" | "stolen_base_point" | "inning_pitched" | "inning_pitched_point" | "strikeout" | "strikeout_point" | "earned_run" | "earned_run_point" | "hit_allowed" | "hit_allowed_point" | "base_on_balls_pitcher" | "base_on_balls_pitcher_point" | "first_inning" | "second_inning" | "total_points" | "in_dream_team" | "series_point" | "created_at" | "updated_at";
export type bsb_squadsCreationAttributes = Optional<bsb_squadsAttributes, bsb_squadsOptionalAttributes>;

export class bsb_squads extends Model<bsb_squadsAttributes, bsb_squadsCreationAttributes> implements bsb_squadsAttributes {
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
  single!: number;
  single_point!: number;
  double!: number;
  double_point!: number;
  triple!: number;
  triple_point!: number;
  home_run!: number;
  home_run_point!: number;
  runs_batted_in!: number;
  runs_batted_in_point!: number;
  run_scored!: number;
  run_scored_point!: number;
  base_on_balls_hitter!: number;
  base_on_balls_hitter_point!: number;
  stolen_base!: number;
  stolen_base_point!: number;
  inning_pitched!: number;
  inning_pitched_point!: number;
  strikeout!: number;
  strikeout_point!: number;
  earned_run!: number;
  earned_run_point!: number;
  hit_allowed!: number;
  hit_allowed_point!: number;
  base_on_balls_pitcher!: number;
  base_on_balls_pitcher_point!: number;
  first_inning?: string;
  second_inning?: string;
  total_points!: number;
  in_dream_team!: number;
  series_point!: number;
  created_at?: Date;
  updated_at?: Date;

  // bsb_squads belongsTo bsb_fixtures via fixture_id
  fixture!: bsb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<bsb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<bsb_fixtures, bsb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<bsb_fixtures>;
  // bsb_squads belongsTo bsb_players via player_id
  player!: bsb_players;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<bsb_players>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<bsb_players, bsb_playersId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<bsb_players>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_squads {
    return sequelize.define('bsb_squads', {
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
        model: 'bsb_players',
        key: 'id'
      }
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bsb_fixtures',
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
    single: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    single_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    double: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    double_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    triple: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    triple_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    home_run: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    home_run_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    runs_batted_in: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    runs_batted_in_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    run_scored: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    run_scored_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    base_on_balls_hitter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    base_on_balls_hitter_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    stolen_base: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stolen_base_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    inning_pitched: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inning_pitched_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    strikeout: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    strikeout_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    earned_run: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    earned_run_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    hit_allowed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hit_allowed_point: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    base_on_balls_pitcher: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    base_on_balls_pitcher_point: {
      type: DataTypes.DECIMAL(11,2),
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
    tableName: 'bsb_squads',
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
  }) as typeof bsb_squads;
  }
}
