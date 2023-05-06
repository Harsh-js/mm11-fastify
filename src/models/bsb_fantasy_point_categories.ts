import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_fantasy_points, bsb_fantasy_pointsId } from './bsb_fantasy_points';

export interface bsb_fantasy_point_categoriesAttributes {
  id: number;
  name: string;
  description?: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;
}

export type bsb_fantasy_point_categoriesPk = "id";
export type bsb_fantasy_point_categoriesId = bsb_fantasy_point_categories[bsb_fantasy_point_categoriesPk];
export type bsb_fantasy_point_categoriesOptionalAttributes = "id" | "description" | "created_at" | "updated_at";
export type bsb_fantasy_point_categoriesCreationAttributes = Optional<bsb_fantasy_point_categoriesAttributes, bsb_fantasy_point_categoriesOptionalAttributes>;

export class bsb_fantasy_point_categories extends Model<bsb_fantasy_point_categoriesAttributes, bsb_fantasy_point_categoriesCreationAttributes> implements bsb_fantasy_point_categoriesAttributes {
  id!: number;
  name!: string;
  description?: string;
  image!: string;
  created_at?: Date;
  updated_at?: Date;

  // bsb_fantasy_point_categories hasMany bsb_fantasy_points via bsb_fantasy_point_category_id
  bsb_fantasy_points!: bsb_fantasy_points[];
  getBsb_fantasy_points!: Sequelize.HasManyGetAssociationsMixin<bsb_fantasy_points>;
  setBsb_fantasy_points!: Sequelize.HasManySetAssociationsMixin<bsb_fantasy_points, bsb_fantasy_pointsId>;
  addBsb_fantasy_point!: Sequelize.HasManyAddAssociationMixin<bsb_fantasy_points, bsb_fantasy_pointsId>;
  addBsb_fantasy_points!: Sequelize.HasManyAddAssociationsMixin<bsb_fantasy_points, bsb_fantasy_pointsId>;
  createBsb_fantasy_point!: Sequelize.HasManyCreateAssociationMixin<bsb_fantasy_points>;
  removeBsb_fantasy_point!: Sequelize.HasManyRemoveAssociationMixin<bsb_fantasy_points, bsb_fantasy_pointsId>;
  removeBsb_fantasy_points!: Sequelize.HasManyRemoveAssociationsMixin<bsb_fantasy_points, bsb_fantasy_pointsId>;
  hasBsb_fantasy_point!: Sequelize.HasManyHasAssociationMixin<bsb_fantasy_points, bsb_fantasy_pointsId>;
  hasBsb_fantasy_points!: Sequelize.HasManyHasAssociationsMixin<bsb_fantasy_points, bsb_fantasy_pointsId>;
  countBsb_fantasy_points!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_fantasy_point_categories {
    return sequelize.define('bsb_fantasy_point_categories', {
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
    tableName: 'bsb_fantasy_point_categories',
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
  }) as typeof bsb_fantasy_point_categories;
  }
}
