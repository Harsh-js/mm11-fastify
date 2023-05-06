import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fixtures, fixturesId } from './fixtures';
import type { players, playersId } from './players';

export interface squadsAttributes {
  id: number;
  player_id: number;
  fixture_id: number;
  team?: string;
  team_id: number;
  substitute: number;
  role?: string;
  playing11: number;
  playing11_point: number;
  fantasy_player_rating: number;
  last_played: number;
  is_active: number;
  runs: number;
  runs_point: number;
  fours: number;
  fours_point: number;
  sixes: number;
  sixes_point: number;
  century_half_century: number;
  century_half_century_point: number;
  strike_rate: number;
  strike_rate_point: number;
  duck: number;
  duck_point: number;
  wicket: number;
  wicket_point: number;
  maiden_over: number;
  maiden_over_point: number;
  economy_rate: number;
  economy_rate_point: number;
  catch: number;
  catch_point: number;
  runoutstumping: number;
  runoutstumping_point: number;
  balls_faced: number;
  overs_bowled: number;
  lbw_bowled_bonus: number;
  lbw_bowled: number;
  wicket_bonus: number;
  catch_bonus: number;
  bonus_point: number;
  total_points: number;
  first_inning?: string;
  second_inning?: string;
  third_inning?: string;
  fourth_inning?: string;
  in_dream_team: number;
  series_point: number;
  created_at?: Date;
  updated_at?: Date;
}

export type squadsPk = "id";
export type squadsId = squads[squadsPk];
export type squadsOptionalAttributes = "id" | "team" | "substitute" | "role" | "playing11" | "playing11_point" | "fantasy_player_rating" | "last_played" | "is_active" | "runs" | "runs_point" | "fours" | "fours_point" | "sixes" | "sixes_point" | "century_half_century" | "century_half_century_point" | "strike_rate" | "strike_rate_point" | "duck" | "duck_point" | "wicket" | "wicket_point" | "maiden_over" | "maiden_over_point" | "economy_rate" | "economy_rate_point" | "catch" | "catch_point" | "runoutstumping" | "runoutstumping_point" | "balls_faced" | "overs_bowled" | "lbw_bowled_bonus" | "lbw_bowled" | "wicket_bonus" | "catch_bonus" | "bonus_point" | "total_points" | "first_inning" | "second_inning" | "third_inning" | "fourth_inning" | "in_dream_team" | "series_point" | "created_at" | "updated_at";
export type squadsCreationAttributes = Optional<squadsAttributes, squadsOptionalAttributes>;

export class squads extends Model<squadsAttributes, squadsCreationAttributes> implements squadsAttributes {
  id!: number;
  player_id!: number;
  fixture_id!: number;
  team?: string;
  team_id!: number;
  substitute!: number;
  role?: string;
  playing11!: number;
  playing11_point!: number;
  fantasy_player_rating!: number;
  last_played!: number;
  is_active!: number;
  runs!: number;
  runs_point!: number;
  fours!: number;
  fours_point!: number;
  sixes!: number;
  sixes_point!: number;
  century_half_century!: number;
  century_half_century_point!: number;
  strike_rate!: number;
  strike_rate_point!: number;
  duck!: number;
  duck_point!: number;
  wicket!: number;
  wicket_point!: number;
  maiden_over!: number;
  maiden_over_point!: number;
  economy_rate!: number;
  economy_rate_point!: number;
  catch!: number;
  catch_point!: number;
  runoutstumping!: number;
  runoutstumping_point!: number;
  balls_faced!: number;
  overs_bowled!: number;
  lbw_bowled_bonus!: number;
  lbw_bowled!: number;
  wicket_bonus!: number;
  catch_bonus!: number;
  bonus_point!: number;
  total_points!: number;
  first_inning?: string;
  second_inning?: string;
  third_inning?: string;
  fourth_inning?: string;
  in_dream_team!: number;
  series_point!: number;
  created_at?: Date;
  updated_at?: Date;

  // squads belongsTo fixtures via fixture_id
  fixture!: fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<fixtures, fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<fixtures>;
  // squads belongsTo players via player_id
  player!: players;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<players>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<players, playersId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<players>;

  static initModel(sequelize: Sequelize.Sequelize): typeof squads {
    return sequelize.define('squads', {
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
        model: 'players',
        key: 'id'
      }
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'fixtures',
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
    role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    playing11: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    playing11_point: {
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
    runs: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    runs_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    fours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fours_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    sixes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sixes_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    century_half_century: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    century_half_century_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    strike_rate: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    strike_rate_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    duck: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    duck_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    wicket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    wicket_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    maiden_over: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    maiden_over_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    economy_rate: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    economy_rate_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    catch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    catch_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    runoutstumping: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    runoutstumping_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    balls_faced: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    overs_bowled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lbw_bowled_bonus: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    lbw_bowled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    wicket_bonus: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    catch_bonus: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      defaultValue: 0
    },
    bonus_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    total_points: {
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
    third_inning: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fourth_inning: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'squads',
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
  }) as typeof squads;
  }
}
