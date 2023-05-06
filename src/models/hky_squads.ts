import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hky_fixtures, hky_fixturesId } from './hky_fixtures';
import type { hky_players, hky_playersId } from './hky_players';

export interface hky_squadsAttributes {
  id: number;
  player_id: number;
  fixture_id: number;
  team?: string;
  team_id: number;
  substitute: number;
  substitute_point: number;
  role?: string;
  playing11: number;
  playing11_point: number;
  fantasy_player_rating: number;
  last_played: number;
  is_active: number;
  goals: number;
  goals_point: number;
  passes: number;
  passes_point: number;
  assists: number;
  assists_point: number;
  saves: number;
  saves_point: number;
  tackles: number;
  tackles_point: number;
  interceptions: number;
  interceptions_point: number;
  blocks: number;
  blocks_point: number;
  circlepenetration: number;
  circlepenetration_point: number;
  shotongoal: number;
  shotongoal_point: number;
  goalsconceded: number;
  goalsconceded_point: number;
  penaltycornerearned: number;
  penaltycornerearned_point: number;
  penaltystrokeearned: number;
  penaltystrokeearned_point: number;
  penaltystrokesaved: number;
  penaltystrokesaved_point: number;
  penaltystrokemissed: number;
  penaltystrokemissed_point: number;
  greencard: number;
  greencard_point: number;
  yellowcard: number;
  yellowcard_point: number;
  redcard: number;
  redcard_point: number;
  first_inning?: string;
  second_inning?: string;
  total_points: number;
  in_dream_team: number;
  series_point: number;
  created_at?: Date;
  updated_at?: Date;
}

export type hky_squadsPk = "id";
export type hky_squadsId = hky_squads[hky_squadsPk];
export type hky_squadsOptionalAttributes = "id" | "team" | "substitute" | "substitute_point" | "role" | "playing11" | "playing11_point" | "fantasy_player_rating" | "last_played" | "is_active" | "goals" | "goals_point" | "passes" | "passes_point" | "assists" | "assists_point" | "saves" | "saves_point" | "tackles" | "tackles_point" | "interceptions" | "interceptions_point" | "blocks" | "blocks_point" | "circlepenetration" | "circlepenetration_point" | "shotongoal" | "shotongoal_point" | "goalsconceded" | "goalsconceded_point" | "penaltycornerearned" | "penaltycornerearned_point" | "penaltystrokeearned" | "penaltystrokeearned_point" | "penaltystrokesaved" | "penaltystrokesaved_point" | "penaltystrokemissed" | "penaltystrokemissed_point" | "greencard" | "greencard_point" | "yellowcard" | "yellowcard_point" | "redcard" | "redcard_point" | "first_inning" | "second_inning" | "total_points" | "in_dream_team" | "series_point" | "created_at" | "updated_at";
export type hky_squadsCreationAttributes = Optional<hky_squadsAttributes, hky_squadsOptionalAttributes>;

export class hky_squads extends Model<hky_squadsAttributes, hky_squadsCreationAttributes> implements hky_squadsAttributes {
  id!: number;
  player_id!: number;
  fixture_id!: number;
  team?: string;
  team_id!: number;
  substitute!: number;
  substitute_point!: number;
  role?: string;
  playing11!: number;
  playing11_point!: number;
  fantasy_player_rating!: number;
  last_played!: number;
  is_active!: number;
  goals!: number;
  goals_point!: number;
  passes!: number;
  passes_point!: number;
  assists!: number;
  assists_point!: number;
  saves!: number;
  saves_point!: number;
  tackles!: number;
  tackles_point!: number;
  interceptions!: number;
  interceptions_point!: number;
  blocks!: number;
  blocks_point!: number;
  circlepenetration!: number;
  circlepenetration_point!: number;
  shotongoal!: number;
  shotongoal_point!: number;
  goalsconceded!: number;
  goalsconceded_point!: number;
  penaltycornerearned!: number;
  penaltycornerearned_point!: number;
  penaltystrokeearned!: number;
  penaltystrokeearned_point!: number;
  penaltystrokesaved!: number;
  penaltystrokesaved_point!: number;
  penaltystrokemissed!: number;
  penaltystrokemissed_point!: number;
  greencard!: number;
  greencard_point!: number;
  yellowcard!: number;
  yellowcard_point!: number;
  redcard!: number;
  redcard_point!: number;
  first_inning?: string;
  second_inning?: string;
  total_points!: number;
  in_dream_team!: number;
  series_point!: number;
  created_at?: Date;
  updated_at?: Date;

  // hky_squads belongsTo hky_fixtures via fixture_id
  fixture!: hky_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<hky_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<hky_fixtures, hky_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<hky_fixtures>;
  // hky_squads belongsTo hky_players via player_id
  player!: hky_players;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<hky_players>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<hky_players, hky_playersId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<hky_players>;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_squads {
    return sequelize.define('hky_squads', {
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
        model: 'hky_players',
        key: 'id'
      }
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'hky_fixtures',
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
    goals: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    goals_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    passes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    passes_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    assists_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    saves: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    saves_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    tackles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tackles_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    interceptions: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    interceptions_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    blocks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    blocks_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    circlepenetration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    circlepenetration_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    shotongoal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    shotongoal_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    goalsconceded: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    goalsconceded_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    penaltycornerearned: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    penaltycornerearned_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    penaltystrokeearned: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    penaltystrokeearned_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    penaltystrokesaved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    penaltystrokesaved_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    penaltystrokemissed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    penaltystrokemissed_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    greencard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    greencard_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    yellowcard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    yellowcard_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    redcard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    redcard_point: {
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
    tableName: 'hky_squads',
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
  }) as typeof hky_squads;
  }
}
