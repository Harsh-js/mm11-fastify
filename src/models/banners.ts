import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface bannersAttributes {
  id: number;
  image: string;
  link?: string;
  type?: string;
  value?: string;
  is_active: number;
  created_at?: Date;
  updated_at?: Date;
}

export type bannersPk = "id";
export type bannersId = banners[bannersPk];
export type bannersOptionalAttributes = "id" | "link" | "type" | "value" | "is_active" | "created_at" | "updated_at";
export type bannersCreationAttributes = Optional<bannersAttributes, bannersOptionalAttributes>;

export class banners extends Model<bannersAttributes, bannersCreationAttributes> implements bannersAttributes {
  id!: number;
  image!: string;
  link?: string;
  type?: string;
  value?: string;
  is_active!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof banners {
    return sequelize.define('banners', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'banners',
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
  }) as typeof banners;
  }
}
