import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface admin_pagesAttributes {
  id: number;
  page_name?: string;
  slug?: string;
  created_at: Date;
  updated_at: Date;
}

export type admin_pagesPk = "id";
export type admin_pagesId = admin_pages[admin_pagesPk];
export type admin_pagesOptionalAttributes = "id" | "page_name" | "slug" | "created_at" | "updated_at";
export type admin_pagesCreationAttributes = Optional<admin_pagesAttributes, admin_pagesOptionalAttributes>;

export class admin_pages extends Model<admin_pagesAttributes, admin_pagesCreationAttributes> implements admin_pagesAttributes {
  id!: number;
  page_name?: string;
  slug?: string;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof admin_pages {
    return sequelize.define('admin_pages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    page_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "page_name"
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    tableName: 'admin_pages',
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
        name: "page_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_name" },
        ]
      },
    ]
  }) as typeof admin_pages;
  }
}
