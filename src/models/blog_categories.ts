import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface blog_categoriesAttributes {
  id: string;
  name: string;
  is_active: number;
  created_at?: Date;
  updated_at?: Date;
}

export type blog_categoriesPk = "id";
export type blog_categoriesId = blog_categories[blog_categoriesPk];
export type blog_categoriesOptionalAttributes = "is_active" | "created_at" | "updated_at";
export type blog_categoriesCreationAttributes = Optional<blog_categoriesAttributes, blog_categoriesOptionalAttributes>;

export class blog_categories extends Model<blog_categoriesAttributes, blog_categoriesCreationAttributes> implements blog_categoriesAttributes {
  id!: string;
  name!: string;
  is_active!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof blog_categories {
    return sequelize.define('blog_categories', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "contest_categories_name_unique"
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'blog_categories',
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
        name: "contest_categories_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  }) as typeof blog_categories;
  }
}
