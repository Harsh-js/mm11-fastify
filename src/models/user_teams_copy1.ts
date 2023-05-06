import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface user_teams_copy1Attributes {
  id: string;
  fixture_id: number;
  competition_id?: number;
  user_id: string;
  name: string;
  inning_number?: number;
  players: object;
  captain_id: number;
  vice_captain_id: number;
  total_points: number;
  is_leaderboard?: number;
  created_at?: Date;
  updated_at?: Date;
  master_player_id?: number;
}

export type user_teams_copy1Pk = "id";
export type user_teams_copy1Id = user_teams_copy1[user_teams_copy1Pk];
export type user_teams_copy1OptionalAttributes = "competition_id" | "inning_number" | "total_points" | "is_leaderboard" | "created_at" | "updated_at" | "master_player_id";
export type user_teams_copy1CreationAttributes = Optional<user_teams_copy1Attributes, user_teams_copy1OptionalAttributes>;

export class user_teams_copy1 extends Model<user_teams_copy1Attributes, user_teams_copy1CreationAttributes> implements user_teams_copy1Attributes {
  id!: string;
  fixture_id!: number;
  competition_id?: number;
  user_id!: string;
  name!: string;
  inning_number?: number;
  players!: object;
  captain_id!: number;
  vice_captain_id!: number;
  total_points!: number;
  is_leaderboard?: number;
  created_at?: Date;
  updated_at?: Date;
  master_player_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof user_teams_copy1 {
    return sequelize.define('user_teams_copy1', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    competition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    players: {
      type: DataTypes.JSON,
      allowNull: false
    },
    captain_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    vice_captain_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    total_points: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    is_leaderboard: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    master_player_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'user_teams_copy1',
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
        name: "user_teams_fixture_id_user_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fixture_id" },
          { name: "user_id" },
          { name: "name" },
        ]
      },
      {
        name: "user_teams_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof user_teams_copy1;
  }
}
