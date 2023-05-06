import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_fixtures, ftb_fixturesId } from './ftb_fixtures';
import type { ftb_players, ftb_playersId } from './ftb_players';

export interface ftb_squadsAttributes {
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
  chancecreated: number;
  chancecreated_point: number;
  interceptionwon: number;
  interceptionwon_point: number;
  minutesplayed: number;
  minutesplayed_point: number;
  goalscored: number;
  goalscored_point: number;
  assist: number;
  assist_point: number;
  passes: number;
  passes_point: number;
  shotsontarget: number;
  shotsontarget_point: number;
  cleansheet: number;
  cleansheet_point: number;
  shotssaved: number;
  shotssaved_point: number;
  penaltysaved: number;
  penaltysaved_point: number;
  tacklesuccessful: number;
  tacklesuccessful_point: number;
  yellowcard: number;
  yellowcard_point: number;
  redcard: number;
  redcard_point: number;
  owngoal: number;
  owngoal_point?: number;
  goalsconceded?: number;
  goalsconceded_point?: number;
  penaltymissed?: number;
  penaltymissed_point?: number;
  total_points?: number;
  in_dream_team: number;
  series_point: number;
  first_inning?: string;
  second_inning?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_squadsPk = "id";
export type ftb_squadsId = ftb_squads[ftb_squadsPk];
export type ftb_squadsOptionalAttributes = "id" | "team" | "substitute" | "role" | "playing11" | "playing11_point" | "fantasy_player_rating" | "last_played" | "is_active" | "chancecreated" | "chancecreated_point" | "interceptionwon" | "interceptionwon_point" | "minutesplayed" | "minutesplayed_point" | "goalscored" | "goalscored_point" | "assist" | "assist_point" | "passes" | "passes_point" | "shotsontarget" | "shotsontarget_point" | "cleansheet" | "cleansheet_point" | "shotssaved" | "shotssaved_point" | "penaltysaved" | "penaltysaved_point" | "tacklesuccessful" | "tacklesuccessful_point" | "yellowcard" | "yellowcard_point" | "redcard" | "redcard_point" | "owngoal" | "owngoal_point" | "goalsconceded" | "goalsconceded_point" | "penaltymissed" | "penaltymissed_point" | "total_points" | "in_dream_team" | "series_point" | "first_inning" | "second_inning" | "created_at" | "updated_at";
export type ftb_squadsCreationAttributes = Optional<ftb_squadsAttributes, ftb_squadsOptionalAttributes>;

export class ftb_squads extends Model<ftb_squadsAttributes, ftb_squadsCreationAttributes> implements ftb_squadsAttributes {
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
  chancecreated!: number;
  chancecreated_point!: number;
  interceptionwon!: number;
  interceptionwon_point!: number;
  minutesplayed!: number;
  minutesplayed_point!: number;
  goalscored!: number;
  goalscored_point!: number;
  assist!: number;
  assist_point!: number;
  passes!: number;
  passes_point!: number;
  shotsontarget!: number;
  shotsontarget_point!: number;
  cleansheet!: number;
  cleansheet_point!: number;
  shotssaved!: number;
  shotssaved_point!: number;
  penaltysaved!: number;
  penaltysaved_point!: number;
  tacklesuccessful!: number;
  tacklesuccessful_point!: number;
  yellowcard!: number;
  yellowcard_point!: number;
  redcard!: number;
  redcard_point!: number;
  owngoal!: number;
  owngoal_point?: number;
  goalsconceded?: number;
  goalsconceded_point?: number;
  penaltymissed?: number;
  penaltymissed_point?: number;
  total_points?: number;
  in_dream_team!: number;
  series_point!: number;
  first_inning?: string;
  second_inning?: string;
  created_at?: Date;
  updated_at?: Date;

  // ftb_squads belongsTo ftb_fixtures via fixture_id
  fixture!: ftb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<ftb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<ftb_fixtures, ftb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<ftb_fixtures>;
  // ftb_squads belongsTo ftb_players via player_id
  player!: ftb_players;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<ftb_players>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<ftb_players, ftb_playersId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<ftb_players>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_squads {
    return sequelize.define('ftb_squads', {
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
        model: 'ftb_players',
        key: 'id'
      }
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ftb_fixtures',
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
    chancecreated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    chancecreated_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    interceptionwon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    interceptionwon_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    minutesplayed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    minutesplayed_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    goalscored: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    goalscored_point: {
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
    shotsontarget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    shotsontarget_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    cleansheet: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    cleansheet_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    shotssaved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    shotssaved_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    penaltysaved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    penaltysaved_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    tacklesuccessful: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tacklesuccessful_point: {
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
    owngoal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    owngoal_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    goalsconceded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalsconceded_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    penaltymissed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penaltymissed_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    total_points: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true,
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
    first_inning: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    second_inning: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'ftb_squads',
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
  }) as typeof ftb_squads;
  }
}
