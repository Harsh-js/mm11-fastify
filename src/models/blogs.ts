import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface blogsAttributes {
  id: number;
  slug: string;
  title: string;
  category?: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  description: string;
  photo: string;
  status: number;
  created_at?: Date;
  updated_at?: Date;
}

export type blogsPk = "id";
export type blogsId = blogs[blogsPk];
export type blogsOptionalAttributes = "id" | "category" | "created_at" | "updated_at";
export type blogsCreationAttributes = Optional<blogsAttributes, blogsOptionalAttributes>;

export class blogs extends Model<blogsAttributes, blogsCreationAttributes> implements blogsAttributes {
  id!: number;
  slug!: string;
  title!: string;
  category?: string;
  meta_title!: string;
  meta_description!: string;
  meta_keyword!: string;
  description!: string;
  photo!: string;
  status!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof blogs {
    return sequelize.define('blogs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meta_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    meta_keyword: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'blogs',
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
    ]
  }) as typeof blogs;
  }
}
