import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface kbd_fantasy_point_categoriesAttributes {
  id: number;
  name: string;
  description?: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;
}

export type kbd_fantasy_point_categoriesPk = "id";
export type kbd_fantasy_point_categoriesId = kbd_fantasy_point_categories[kbd_fantasy_point_categoriesPk];
export type kbd_fantasy_point_categoriesOptionalAttributes = "id" | "description" | "created_at" | "updated_at";
export type kbd_fantasy_point_categoriesCreationAttributes = Optional<kbd_fantasy_point_categoriesAttributes, kbd_fantasy_point_categoriesOptionalAttributes>;

export class kbd_fantasy_point_categories extends Model<kbd_fantasy_point_categoriesAttributes, kbd_fantasy_point_categoriesCreationAttributes> implements kbd_fantasy_point_categoriesAttributes {
  id!: number;
  name!: string;
  description?: string;
  image!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_fantasy_point_categories {
    return sequelize.define('kbd_fantasy_point_categories', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "fantasy_point_categories_name_unique"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'kbd_fantasy_point_categories',
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
        name: "fantasy_point_categories_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  }) as typeof kbd_fantasy_point_categories;
  }
}
