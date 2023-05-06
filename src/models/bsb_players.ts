import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_squads, bsb_squadsId } from './bsb_squads';

export interface bsb_playersAttributes {
  id: number;
  name: string;
  role?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type bsb_playersPk = "id";
export type bsb_playersId = bsb_players[bsb_playersPk];
export type bsb_playersOptionalAttributes = "id" | "role" | "image" | "created_at" | "updated_at";
export type bsb_playersCreationAttributes = Optional<bsb_playersAttributes, bsb_playersOptionalAttributes>;

export class bsb_players extends Model<bsb_playersAttributes, bsb_playersCreationAttributes> implements bsb_playersAttributes {
  id!: number;
  name!: string;
  role?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;

  // bsb_players hasMany bsb_squads via player_id
  bsb_squads!: bsb_squads[];
  getBsb_squads!: Sequelize.HasManyGetAssociationsMixin<bsb_squads>;
  setBsb_squads!: Sequelize.HasManySetAssociationsMixin<bsb_squads, bsb_squadsId>;
  addBsb_squad!: Sequelize.HasManyAddAssociationMixin<bsb_squads, bsb_squadsId>;
  addBsb_squads!: Sequelize.HasManyAddAssociationsMixin<bsb_squads, bsb_squadsId>;
  createBsb_squad!: Sequelize.HasManyCreateAssociationMixin<bsb_squads>;
  removeBsb_squad!: Sequelize.HasManyRemoveAssociationMixin<bsb_squads, bsb_squadsId>;
  removeBsb_squads!: Sequelize.HasManyRemoveAssociationsMixin<bsb_squads, bsb_squadsId>;
  hasBsb_squad!: Sequelize.HasManyHasAssociationMixin<bsb_squads, bsb_squadsId>;
  hasBsb_squads!: Sequelize.HasManyHasAssociationsMixin<bsb_squads, bsb_squadsId>;
  countBsb_squads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_players {
    return sequelize.define('bsb_players', {
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
    role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'bsb_players',
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
  }) as typeof bsb_players;
  }
}
