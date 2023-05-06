import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fantasy_point_categories, fantasy_point_categoriesId } from './fantasy_point_categories';

export interface fantasy_pointsAttributes {
  id: number;
  fantasy_point_category_id: number;
  name: string;
  code: string;
  postfix?: string;
  note?: string;
  point: string;
  type: 'T20' | 'T10' | 'ODI' | 'TEST' | 'THE HUNDRED';
  created_at?: Date;
  updated_at?: Date;
}

export type fantasy_pointsPk = "id";
export type fantasy_pointsId = fantasy_points[fantasy_pointsPk];
export type fantasy_pointsOptionalAttributes = "id" | "postfix" | "note" | "created_at" | "updated_at";
export type fantasy_pointsCreationAttributes = Optional<fantasy_pointsAttributes, fantasy_pointsOptionalAttributes>;

export class fantasy_points extends Model<fantasy_pointsAttributes, fantasy_pointsCreationAttributes> implements fantasy_pointsAttributes {
  id!: number;
  fantasy_point_category_id!: number;
  name!: string;
  code!: string;
  postfix?: string;
  note?: string;
  point!: string;
  type!: 'T20' | 'T10' | 'ODI' | 'TEST' | 'THE HUNDRED';
  created_at?: Date;
  updated_at?: Date;

  // fantasy_points belongsTo fantasy_point_categories via fantasy_point_category_id
  fantasy_point_category!: fantasy_point_categories;
  getFantasy_point_category!: Sequelize.BelongsToGetAssociationMixin<fantasy_point_categories>;
  setFantasy_point_category!: Sequelize.BelongsToSetAssociationMixin<fantasy_point_categories, fantasy_point_categoriesId>;
  createFantasy_point_category!: Sequelize.BelongsToCreateAssociationMixin<fantasy_point_categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof fantasy_points {
    return sequelize.define('fantasy_points', {
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
        model: 'fantasy_point_categories',
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
    postfix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    point: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('T20','T10','ODI','TEST','THE HUNDRED'),
      allowNull: false
    }
  }, {
    tableName: 'fantasy_points',
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
        name: "code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
          { name: "type" },
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
  }) as typeof fantasy_points;
  }
}
