import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_fantasy_point_categories, ftb_fantasy_point_categoriesId } from './ftb_fantasy_point_categories';

export interface ftb_fantasy_pointsAttributes {
  id: number;
  fantasy_point_category_id: number;
  name: string;
  code: string;
  point: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_fantasy_pointsPk = "id";
export type ftb_fantasy_pointsId = ftb_fantasy_points[ftb_fantasy_pointsPk];
export type ftb_fantasy_pointsOptionalAttributes = "id" | "created_at" | "updated_at";
export type ftb_fantasy_pointsCreationAttributes = Optional<ftb_fantasy_pointsAttributes, ftb_fantasy_pointsOptionalAttributes>;

export class ftb_fantasy_points extends Model<ftb_fantasy_pointsAttributes, ftb_fantasy_pointsCreationAttributes> implements ftb_fantasy_pointsAttributes {
  id!: number;
  fantasy_point_category_id!: number;
  name!: string;
  code!: string;
  point!: string;
  created_at?: Date;
  updated_at?: Date;

  // ftb_fantasy_points belongsTo ftb_fantasy_point_categories via fantasy_point_category_id
  fantasy_point_category!: ftb_fantasy_point_categories;
  getFantasy_point_category!: Sequelize.BelongsToGetAssociationMixin<ftb_fantasy_point_categories>;
  setFantasy_point_category!: Sequelize.BelongsToSetAssociationMixin<ftb_fantasy_point_categories, ftb_fantasy_point_categoriesId>;
  createFantasy_point_category!: Sequelize.BelongsToCreateAssociationMixin<ftb_fantasy_point_categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_fantasy_points {
    return sequelize.define('ftb_fantasy_points', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fantasy_point_category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ftb_fantasy_point_categories',
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
    tableName: 'ftb_fantasy_points',
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
        name: "fantasy_points_fantasy_point_category_id_foreign",
        using: "BTREE",
        fields: [
          { name: "fantasy_point_category_id" },
        ]
      },
    ]
  }) as typeof ftb_fantasy_points;
  }
}
