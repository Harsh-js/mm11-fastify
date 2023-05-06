import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_squads, kbd_squadsId } from './kbd_squads';

export interface kbd_playersAttributes {
  id: number;
  name: string;
  role?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type kbd_playersPk = "id";
export type kbd_playersId = kbd_players[kbd_playersPk];
export type kbd_playersOptionalAttributes = "id" | "role" | "image" | "created_at" | "updated_at";
export type kbd_playersCreationAttributes = Optional<kbd_playersAttributes, kbd_playersOptionalAttributes>;

export class kbd_players extends Model<kbd_playersAttributes, kbd_playersCreationAttributes> implements kbd_playersAttributes {
  id!: number;
  name!: string;
  role?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;

  // kbd_players hasMany kbd_squads via player_id
  kbd_squads!: kbd_squads[];
  getKbd_squads!: Sequelize.HasManyGetAssociationsMixin<kbd_squads>;
  setKbd_squads!: Sequelize.HasManySetAssociationsMixin<kbd_squads, kbd_squadsId>;
  addKbd_squad!: Sequelize.HasManyAddAssociationMixin<kbd_squads, kbd_squadsId>;
  addKbd_squads!: Sequelize.HasManyAddAssociationsMixin<kbd_squads, kbd_squadsId>;
  createKbd_squad!: Sequelize.HasManyCreateAssociationMixin<kbd_squads>;
  removeKbd_squad!: Sequelize.HasManyRemoveAssociationMixin<kbd_squads, kbd_squadsId>;
  removeKbd_squads!: Sequelize.HasManyRemoveAssociationsMixin<kbd_squads, kbd_squadsId>;
  hasKbd_squad!: Sequelize.HasManyHasAssociationMixin<kbd_squads, kbd_squadsId>;
  hasKbd_squads!: Sequelize.HasManyHasAssociationsMixin<kbd_squads, kbd_squadsId>;
  countKbd_squads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_players {
    return sequelize.define('kbd_players', {
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
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'kbd_players',
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
    ]
  }) as typeof kbd_players;
  }
}
