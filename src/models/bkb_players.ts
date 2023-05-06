import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_squads, bkb_squadsId } from './bkb_squads';

export interface bkb_playersAttributes {
  id: number;
  name: string;
  role?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type bkb_playersPk = "id";
export type bkb_playersId = bkb_players[bkb_playersPk];
export type bkb_playersOptionalAttributes = "id" | "role" | "image" | "created_at" | "updated_at";
export type bkb_playersCreationAttributes = Optional<bkb_playersAttributes, bkb_playersOptionalAttributes>;

export class bkb_players extends Model<bkb_playersAttributes, bkb_playersCreationAttributes> implements bkb_playersAttributes {
  id!: number;
  name!: string;
  role?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;

  // bkb_players hasMany bkb_squads via player_id
  bkb_squads!: bkb_squads[];
  getBkb_squads!: Sequelize.HasManyGetAssociationsMixin<bkb_squads>;
  setBkb_squads!: Sequelize.HasManySetAssociationsMixin<bkb_squads, bkb_squadsId>;
  addBkb_squad!: Sequelize.HasManyAddAssociationMixin<bkb_squads, bkb_squadsId>;
  addBkb_squads!: Sequelize.HasManyAddAssociationsMixin<bkb_squads, bkb_squadsId>;
  createBkb_squad!: Sequelize.HasManyCreateAssociationMixin<bkb_squads>;
  removeBkb_squad!: Sequelize.HasManyRemoveAssociationMixin<bkb_squads, bkb_squadsId>;
  removeBkb_squads!: Sequelize.HasManyRemoveAssociationsMixin<bkb_squads, bkb_squadsId>;
  hasBkb_squad!: Sequelize.HasManyHasAssociationMixin<bkb_squads, bkb_squadsId>;
  hasBkb_squads!: Sequelize.HasManyHasAssociationsMixin<bkb_squads, bkb_squadsId>;
  countBkb_squads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_players {
    return sequelize.define('bkb_players', {
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
    tableName: 'bkb_players',
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
  }) as typeof bkb_players;
  }
}
