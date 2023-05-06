import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pagesAttributes {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at?: Date;
  updated_at?: Date;
}

export type pagesPk = "id";
export type pagesId = pages[pagesPk];
export type pagesOptionalAttributes = "id" | "created_at" | "updated_at";
export type pagesCreationAttributes = Optional<pagesAttributes, pagesOptionalAttributes>;

export class pages extends Model<pagesAttributes, pagesCreationAttributes> implements pagesAttributes {
  id!: number;
  title!: string;
  slug!: string;
  content!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof pages {
    return sequelize.define('pages', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "pages_title_unique"
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
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
    tableName: 'pages',
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
        name: "pages_title_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
    ]
  }) as typeof pages;
  }
}
