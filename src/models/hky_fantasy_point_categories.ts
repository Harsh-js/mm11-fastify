import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hky_fantasy_points, hky_fantasy_pointsId } from './hky_fantasy_points';

export interface hky_fantasy_point_categoriesAttributes {
  id: number;
  name: string;
  description?: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;
}

export type hky_fantasy_point_categoriesPk = "id";
export type hky_fantasy_point_categoriesId = hky_fantasy_point_categories[hky_fantasy_point_categoriesPk];
export type hky_fantasy_point_categoriesOptionalAttributes = "id" | "description" | "created_at" | "updated_at";
export type hky_fantasy_point_categoriesCreationAttributes = Optional<hky_fantasy_point_categoriesAttributes, hky_fantasy_point_categoriesOptionalAttributes>;

export class hky_fantasy_point_categories extends Model<hky_fantasy_point_categoriesAttributes, hky_fantasy_point_categoriesCreationAttributes> implements hky_fantasy_point_categoriesAttributes {
  id!: number;
  name!: string;
  description?: string;
  image!: string;
  created_at?: Date;
  updated_at?: Date;

  // hky_fantasy_point_categories hasMany hky_fantasy_points via hky_fantasy_point_category_id
  hky_fantasy_points!: hky_fantasy_points[];
  getHky_fantasy_points!: Sequelize.HasManyGetAssociationsMixin<hky_fantasy_points>;
  setHky_fantasy_points!: Sequelize.HasManySetAssociationsMixin<hky_fantasy_points, hky_fantasy_pointsId>;
  addHky_fantasy_point!: Sequelize.HasManyAddAssociationMixin<hky_fantasy_points, hky_fantasy_pointsId>;
  addHky_fantasy_points!: Sequelize.HasManyAddAssociationsMixin<hky_fantasy_points, hky_fantasy_pointsId>;
  createHky_fantasy_point!: Sequelize.HasManyCreateAssociationMixin<hky_fantasy_points>;
  removeHky_fantasy_point!: Sequelize.HasManyRemoveAssociationMixin<hky_fantasy_points, hky_fantasy_pointsId>;
  removeHky_fantasy_points!: Sequelize.HasManyRemoveAssociationsMixin<hky_fantasy_points, hky_fantasy_pointsId>;
  hasHky_fantasy_point!: Sequelize.HasManyHasAssociationMixin<hky_fantasy_points, hky_fantasy_pointsId>;
  hasHky_fantasy_points!: Sequelize.HasManyHasAssociationsMixin<hky_fantasy_points, hky_fantasy_pointsId>;
  countHky_fantasy_points!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_fantasy_point_categories {
    return sequelize.define('hky_fantasy_point_categories', {
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
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'hky_fantasy_point_categories',
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
      {
        name: "fantasy_point_categories_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  }) as typeof hky_fantasy_point_categories;
  }
}
