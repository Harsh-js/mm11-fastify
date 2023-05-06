import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_squads, ftb_squadsId } from './ftb_squads';

export interface ftb_playersAttributes {
  id: number;
  name: string;
  short_name?: string;
  birthdate?: Date;
  nationality?: string;
  foot_style?: string;
  country?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_playersPk = "id";
export type ftb_playersId = ftb_players[ftb_playersPk];
export type ftb_playersOptionalAttributes = "id" | "short_name" | "birthdate" | "nationality" | "foot_style" | "country" | "image" | "created_at" | "updated_at";
export type ftb_playersCreationAttributes = Optional<ftb_playersAttributes, ftb_playersOptionalAttributes>;

export class ftb_players extends Model<ftb_playersAttributes, ftb_playersCreationAttributes> implements ftb_playersAttributes {
  id!: number;
  name!: string;
  short_name?: string;
  birthdate?: Date;
  nationality?: string;
  foot_style?: string;
  country?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;

  // ftb_players hasMany ftb_squads via player_id
  ftb_squads!: ftb_squads[];
  getFtb_squads!: Sequelize.HasManyGetAssociationsMixin<ftb_squads>;
  setFtb_squads!: Sequelize.HasManySetAssociationsMixin<ftb_squads, ftb_squadsId>;
  addFtb_squad!: Sequelize.HasManyAddAssociationMixin<ftb_squads, ftb_squadsId>;
  addFtb_squads!: Sequelize.HasManyAddAssociationsMixin<ftb_squads, ftb_squadsId>;
  createFtb_squad!: Sequelize.HasManyCreateAssociationMixin<ftb_squads>;
  removeFtb_squad!: Sequelize.HasManyRemoveAssociationMixin<ftb_squads, ftb_squadsId>;
  removeFtb_squads!: Sequelize.HasManyRemoveAssociationsMixin<ftb_squads, ftb_squadsId>;
  hasFtb_squad!: Sequelize.HasManyHasAssociationMixin<ftb_squads, ftb_squadsId>;
  hasFtb_squads!: Sequelize.HasManyHasAssociationsMixin<ftb_squads, ftb_squadsId>;
  countFtb_squads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_players {
    return sequelize.define('ftb_players', {
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
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    nationality: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foot_style: {
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
    tableName: 'ftb_players',
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
  }) as typeof ftb_players;
  }
}
