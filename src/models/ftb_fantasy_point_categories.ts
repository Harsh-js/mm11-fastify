import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_fantasy_points, ftb_fantasy_pointsId } from './ftb_fantasy_points';

export interface ftb_fantasy_point_categoriesAttributes {
  id: number;
  name: string;
  description?: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_fantasy_point_categoriesPk = "id";
export type ftb_fantasy_point_categoriesId = ftb_fantasy_point_categories[ftb_fantasy_point_categoriesPk];
export type ftb_fantasy_point_categoriesOptionalAttributes = "id" | "description" | "created_at" | "updated_at";
export type ftb_fantasy_point_categoriesCreationAttributes = Optional<ftb_fantasy_point_categoriesAttributes, ftb_fantasy_point_categoriesOptionalAttributes>;

export class ftb_fantasy_point_categories extends Model<ftb_fantasy_point_categoriesAttributes, ftb_fantasy_point_categoriesCreationAttributes> implements ftb_fantasy_point_categoriesAttributes {
  id!: number;
  name!: string;
  description?: string;
  image!: string;
  created_at?: Date;
  updated_at?: Date;

  // ftb_fantasy_point_categories hasMany ftb_fantasy_points via fantasy_point_category_id
  ftb_fantasy_points!: ftb_fantasy_points[];
  getFtb_fantasy_points!: Sequelize.HasManyGetAssociationsMixin<ftb_fantasy_points>;
  setFtb_fantasy_points!: Sequelize.HasManySetAssociationsMixin<ftb_fantasy_points, ftb_fantasy_pointsId>;
  addFtb_fantasy_point!: Sequelize.HasManyAddAssociationMixin<ftb_fantasy_points, ftb_fantasy_pointsId>;
  addFtb_fantasy_points!: Sequelize.HasManyAddAssociationsMixin<ftb_fantasy_points, ftb_fantasy_pointsId>;
  createFtb_fantasy_point!: Sequelize.HasManyCreateAssociationMixin<ftb_fantasy_points>;
  removeFtb_fantasy_point!: Sequelize.HasManyRemoveAssociationMixin<ftb_fantasy_points, ftb_fantasy_pointsId>;
  removeFtb_fantasy_points!: Sequelize.HasManyRemoveAssociationsMixin<ftb_fantasy_points, ftb_fantasy_pointsId>;
  hasFtb_fantasy_point!: Sequelize.HasManyHasAssociationMixin<ftb_fantasy_points, ftb_fantasy_pointsId>;
  hasFtb_fantasy_points!: Sequelize.HasManyHasAssociationsMixin<ftb_fantasy_points, ftb_fantasy_pointsId>;
  countFtb_fantasy_points!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_fantasy_point_categories {
    return sequelize.define('ftb_fantasy_point_categories', {
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
    tableName: 'ftb_fantasy_point_categories',
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
  }) as typeof ftb_fantasy_point_categories;
  }
}
