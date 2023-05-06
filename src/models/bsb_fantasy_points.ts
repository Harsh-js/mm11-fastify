import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_fantasy_point_categories, bsb_fantasy_point_categoriesId } from './bsb_fantasy_point_categories';

export interface bsb_fantasy_pointsAttributes {
  id: number;
  bsb_fantasy_point_category_id: number;
  name: string;
  code: string;
  point: string;
  created_at?: Date;
  updated_at?: Date;
}

export type bsb_fantasy_pointsPk = "id";
export type bsb_fantasy_pointsId = bsb_fantasy_points[bsb_fantasy_pointsPk];
export type bsb_fantasy_pointsOptionalAttributes = "id" | "created_at" | "updated_at";
export type bsb_fantasy_pointsCreationAttributes = Optional<bsb_fantasy_pointsAttributes, bsb_fantasy_pointsOptionalAttributes>;

export class bsb_fantasy_points extends Model<bsb_fantasy_pointsAttributes, bsb_fantasy_pointsCreationAttributes> implements bsb_fantasy_pointsAttributes {
  id!: number;
  bsb_fantasy_point_category_id!: number;
  name!: string;
  code!: string;
  point!: string;
  created_at?: Date;
  updated_at?: Date;

  // bsb_fantasy_points belongsTo bsb_fantasy_point_categories via bsb_fantasy_point_category_id
  bsb_fantasy_point_category!: bsb_fantasy_point_categories;
  getBsb_fantasy_point_category!: Sequelize.BelongsToGetAssociationMixin<bsb_fantasy_point_categories>;
  setBsb_fantasy_point_category!: Sequelize.BelongsToSetAssociationMixin<bsb_fantasy_point_categories, bsb_fantasy_point_categoriesId>;
  createBsb_fantasy_point_category!: Sequelize.BelongsToCreateAssociationMixin<bsb_fantasy_point_categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_fantasy_points {
    return sequelize.define('bsb_fantasy_points', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    bsb_fantasy_point_category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bsb_fantasy_point_categories',
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
    tableName: 'bsb_fantasy_points',
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
          { name: "bsb_fantasy_point_category_id" },
        ]
      },
    ]
  }) as typeof bsb_fantasy_points;
  }
}
