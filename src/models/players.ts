import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { squads, squadsId } from './squads';

export interface playersAttributes {
  id: number;
  name: string;
  short_name: string;
  birthdate?: string;
  nationality?: string;
  batting_style?: string;
  bowling_style?: string;
  country?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type playersPk = "id";
export type playersId = players[playersPk];
export type playersOptionalAttributes = "id" | "birthdate" | "nationality" | "batting_style" | "bowling_style" | "country" | "image" | "created_at" | "updated_at";
export type playersCreationAttributes = Optional<playersAttributes, playersOptionalAttributes>;

export class players extends Model<playersAttributes, playersCreationAttributes> implements playersAttributes {
  id!: number;
  name!: string;
  short_name!: string;
  birthdate?: string;
  nationality?: string;
  batting_style?: string;
  bowling_style?: string;
  country?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;

  // players hasMany squads via player_id
  squads!: squads[];
  getSquads!: Sequelize.HasManyGetAssociationsMixin<squads>;
  setSquads!: Sequelize.HasManySetAssociationsMixin<squads, squadsId>;
  addSquad!: Sequelize.HasManyAddAssociationMixin<squads, squadsId>;
  addSquads!: Sequelize.HasManyAddAssociationsMixin<squads, squadsId>;
  createSquad!: Sequelize.HasManyCreateAssociationMixin<squads>;
  removeSquad!: Sequelize.HasManyRemoveAssociationMixin<squads, squadsId>;
  removeSquads!: Sequelize.HasManyRemoveAssociationsMixin<squads, squadsId>;
  hasSquad!: Sequelize.HasManyHasAssociationMixin<squads, squadsId>;
  hasSquads!: Sequelize.HasManyHasAssociationsMixin<squads, squadsId>;
  countSquads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof players {
    return sequelize.define('players', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    short_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    batting_style: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bowling_style: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'players',
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
    ]
  }) as typeof players;
  }
}
