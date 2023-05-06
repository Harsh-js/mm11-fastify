import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hky_fantasy_point_categories, hky_fantasy_point_categoriesId } from './hky_fantasy_point_categories';

export interface hky_fantasy_pointsAttributes {
  id: number;
  hky_fantasy_point_category_id: number;
  name: string;
  code: string;
  point: string;
  created_at?: Date;
  updated_at?: Date;
}

export type hky_fantasy_pointsPk = "id";
export type hky_fantasy_pointsId = hky_fantasy_points[hky_fantasy_pointsPk];
export type hky_fantasy_pointsOptionalAttributes = "id" | "created_at" | "updated_at";
export type hky_fantasy_pointsCreationAttributes = Optional<hky_fantasy_pointsAttributes, hky_fantasy_pointsOptionalAttributes>;

export class hky_fantasy_points extends Model<hky_fantasy_pointsAttributes, hky_fantasy_pointsCreationAttributes> implements hky_fantasy_pointsAttributes {
  id!: number;
  hky_fantasy_point_category_id!: number;
  name!: string;
  code!: string;
  point!: string;
  created_at?: Date;
  updated_at?: Date;

  // hky_fantasy_points belongsTo hky_fantasy_point_categories via hky_fantasy_point_category_id
  hky_fantasy_point_category!: hky_fantasy_point_categories;
  getHky_fantasy_point_category!: Sequelize.BelongsToGetAssociationMixin<hky_fantasy_point_categories>;
  setHky_fantasy_point_category!: Sequelize.BelongsToSetAssociationMixin<hky_fantasy_point_categories, hky_fantasy_point_categoriesId>;
  createHky_fantasy_point_category!: Sequelize.BelongsToCreateAssociationMixin<hky_fantasy_point_categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_fantasy_points {
    return sequelize.define('hky_fantasy_points', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    hky_fantasy_point_category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'hky_fantasy_point_categories',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    point: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'hky_fantasy_points',
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
        name: "fantasy_points_fantasy_point_category_id_foreign",
        using: "BTREE",
        fields: [
          { name: "hky_fantasy_point_category_id" },
        ]
      },
    ]
  }) as typeof hky_fantasy_points;
  }
}
