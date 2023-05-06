import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hky_squads, hky_squadsId } from './hky_squads';

export interface hky_playersAttributes {
  id: number;
  name: string;
  role?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type hky_playersPk = "id";
export type hky_playersId = hky_players[hky_playersPk];
export type hky_playersOptionalAttributes = "id" | "role" | "image" | "created_at" | "updated_at";
export type hky_playersCreationAttributes = Optional<hky_playersAttributes, hky_playersOptionalAttributes>;

export class hky_players extends Model<hky_playersAttributes, hky_playersCreationAttributes> implements hky_playersAttributes {
  id!: number;
  name!: string;
  role?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;

  // hky_players hasMany hky_squads via player_id
  hky_squads!: hky_squads[];
  getHky_squads!: Sequelize.HasManyGetAssociationsMixin<hky_squads>;
  setHky_squads!: Sequelize.HasManySetAssociationsMixin<hky_squads, hky_squadsId>;
  addHky_squad!: Sequelize.HasManyAddAssociationMixin<hky_squads, hky_squadsId>;
  addHky_squads!: Sequelize.HasManyAddAssociationsMixin<hky_squads, hky_squadsId>;
  createHky_squad!: Sequelize.HasManyCreateAssociationMixin<hky_squads>;
  removeHky_squad!: Sequelize.HasManyRemoveAssociationMixin<hky_squads, hky_squadsId>;
  removeHky_squads!: Sequelize.HasManyRemoveAssociationsMixin<hky_squads, hky_squadsId>;
  hasHky_squad!: Sequelize.HasManyHasAssociationMixin<hky_squads, hky_squadsId>;
  hasHky_squads!: Sequelize.HasManyHasAssociationsMixin<hky_squads, hky_squadsId>;
  countHky_squads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_players {
    return sequelize.define('hky_players', {
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
    tableName: 'hky_players',
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
  }) as typeof hky_players;
  }
}
