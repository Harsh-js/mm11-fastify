import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fantasy_points, fantasy_pointsId } from './fantasy_points';

export interface fantasy_point_categoriesAttributes {
  id: number;
  name: string;
  note?: string;
  description?: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;
}

export type fantasy_point_categoriesPk = "id";
export type fantasy_point_categoriesId = fantasy_point_categories[fantasy_point_categoriesPk];
export type fantasy_point_categoriesOptionalAttributes = "id" | "note" | "description" | "created_at" | "updated_at";
export type fantasy_point_categoriesCreationAttributes = Optional<fantasy_point_categoriesAttributes, fantasy_point_categoriesOptionalAttributes>;

export class fantasy_point_categories extends Model<fantasy_point_categoriesAttributes, fantasy_point_categoriesCreationAttributes> implements fantasy_point_categoriesAttributes {
  id!: number;
  name!: string;
  note?: string;
  description?: string;
  image!: string;
  created_at?: Date;
  updated_at?: Date;

  // fantasy_point_categories hasMany fantasy_points via fantasy_point_category_id
  fantasy_points!: fantasy_points[];
  getFantasy_points!: Sequelize.HasManyGetAssociationsMixin<fantasy_points>;
  setFantasy_points!: Sequelize.HasManySetAssociationsMixin<fantasy_points, fantasy_pointsId>;
  addFantasy_point!: Sequelize.HasManyAddAssociationMixin<fantasy_points, fantasy_pointsId>;
  addFantasy_points!: Sequelize.HasManyAddAssociationsMixin<fantasy_points, fantasy_pointsId>;
  createFantasy_point!: Sequelize.HasManyCreateAssociationMixin<fantasy_points>;
  removeFantasy_point!: Sequelize.HasManyRemoveAssociationMixin<fantasy_points, fantasy_pointsId>;
  removeFantasy_points!: Sequelize.HasManyRemoveAssociationsMixin<fantasy_points, fantasy_pointsId>;
  hasFantasy_point!: Sequelize.HasManyHasAssociationMixin<fantasy_points, fantasy_pointsId>;
  hasFantasy_points!: Sequelize.HasManyHasAssociationsMixin<fantasy_points, fantasy_pointsId>;
  countFantasy_points!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof fantasy_point_categories {
    return sequelize.define('fantasy_point_categories', {
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
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'fantasy_point_categories',
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
  }) as typeof fantasy_point_categories;
  }
}
