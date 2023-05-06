import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_fixtures, kbd_fixturesId } from './kbd_fixtures';
import type { kbd_players, kbd_playersId } from './kbd_players';

export interface kbd_squadsAttributes {
  id: number;
  player_id: number;
  fixture_id: number;
  team?: string;
  team_id: number;
  substitute: number;
  substitute_point?: number;
  role?: string;
  playing7: number;
  playing7_point: number;
  fantasy_player_rating: number;
  last_played: number;
  is_active: number;
  raidtouch: number;
  raidtouch_point: number;
  raidbonus: number;
  raidbonus_point: number;
  superraid: number;
  superraid_point: number;
  superten: number;
  superten_point: number;
  raidunsuccessful: number;
  raidunsuccessful_point: number;
  tacklesuccessful: number;
  tacklesuccessful_point: number;
  supertackles: number;
  supertackles_point: number;
  tackleunsuccessful: number;
  tackleunsuccessful_point: number;
  highfive: number;
  highfive_point: number;
  pushingallout: number;
  pushingallout_point: number;
  gettingallout: number;
  gettingallout_point: number;
  greencard: number;
  greencard_point: number;
  yellowcard: number;
  yellowcard_point: number;
  redcard: number;
  redcard_point: number;
  first_inning?: string;
  second_inning?: string;
  catch: number;
  catch_point: number;
  runoutstumping_point: number;
  bonus_point: number;
  total_points: number;
  in_dream_team: number;
  series_point: number;
  created_at?: Date;
  updated_at?: Date;
}

export type kbd_squadsPk = "id";
export type kbd_squadsId = kbd_squads[kbd_squadsPk];
export type kbd_squadsOptionalAttributes = "id" | "team" | "substitute" | "substitute_point" | "role" | "playing7" | "playing7_point" | "fantasy_player_rating" | "last_played" | "is_active" | "raidtouch" | "raidtouch_point" | "raidbonus" | "raidbonus_point" | "superraid" | "superraid_point" | "superten" | "superten_point" | "raidunsuccessful" | "raidunsuccessful_point" | "tacklesuccessful" | "tacklesuccessful_point" | "supertackles" | "supertackles_point" | "tackleunsuccessful" | "tackleunsuccessful_point" | "highfive" | "highfive_point" | "pushingallout" | "pushingallout_point" | "gettingallout" | "gettingallout_point" | "greencard" | "greencard_point" | "yellowcard" | "yellowcard_point" | "redcard" | "redcard_point" | "first_inning" | "second_inning" | "catch" | "catch_point" | "runoutstumping_point" | "bonus_point" | "total_points" | "in_dream_team" | "series_point" | "created_at" | "updated_at";
export type kbd_squadsCreationAttributes = Optional<kbd_squadsAttributes, kbd_squadsOptionalAttributes>;

export class kbd_squads extends Model<kbd_squadsAttributes, kbd_squadsCreationAttributes> implements kbd_squadsAttributes {
  id!: number;
  player_id!: number;
  fixture_id!: number;
  team?: string;
  team_id!: number;
  substitute!: number;
  substitute_point?: number;
  role?: string;
  playing7!: number;
  playing7_point!: number;
  fantasy_player_rating!: number;
  last_played!: number;
  is_active!: number;
  raidtouch!: number;
  raidtouch_point!: number;
  raidbonus!: number;
  raidbonus_point!: number;
  superraid!: number;
  superraid_point!: number;
  superten!: number;
  superten_point!: number;
  raidunsuccessful!: number;
  raidunsuccessful_point!: number;
  tacklesuccessful!: number;
  tacklesuccessful_point!: number;
  supertackles!: number;
  supertackles_point!: number;
  tackleunsuccessful!: number;
  tackleunsuccessful_point!: number;
  highfive!: number;
  highfive_point!: number;
  pushingallout!: number;
  pushingallout_point!: number;
  gettingallout!: number;
  gettingallout_point!: number;
  greencard!: number;
  greencard_point!: number;
  yellowcard!: number;
  yellowcard_point!: number;
  redcard!: number;
  redcard_point!: number;
  first_inning?: string;
  second_inning?: string;
  catch!: number;
  catch_point!: number;
  runoutstumping_point!: number;
  bonus_point!: number;
  total_points!: number;
  in_dream_team!: number;
  series_point!: number;
  created_at?: Date;
  updated_at?: Date;

  // kbd_squads belongsTo kbd_fixtures via fixture_id
  fixture!: kbd_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<kbd_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<kbd_fixtures, kbd_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<kbd_fixtures>;
  // kbd_squads belongsTo kbd_players via player_id
  player!: kbd_players;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<kbd_players>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<kbd_players, kbd_playersId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<kbd_players>;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_squads {
    return sequelize.define('kbd_squads', {
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
        model: 'kbd_players',
        key: 'id'
      }
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'kbd_fixtures',
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
      allowNull: true,
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
    raidtouch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    raidtouch_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    raidbonus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    raidbonus_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    superraid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    superraid_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    superten: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    superten_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    raidunsuccessful: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    raidunsuccessful_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    tacklesuccessful: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    tacklesuccessful_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    supertackles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    supertackles_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    tackleunsuccessful: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tackleunsuccessful_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    highfive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    highfive_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pushingallout: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pushingallout_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gettingallout: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gettingallout_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    runoutstumping_point: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
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
    tableName: 'kbd_squads',
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
  }) as typeof kbd_squads;
  }
}
