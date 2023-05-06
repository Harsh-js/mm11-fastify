import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface faqsAttributes {
  id: number;
  title: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

export type faqsPk = "id";
export type faqsId = faqs[faqsPk];
export type faqsOptionalAttributes = "id" | "created_at" | "updated_at";
export type faqsCreationAttributes = Optional<faqsAttributes, faqsOptionalAttributes>;

export class faqs extends Model<faqsAttributes, faqsCreationAttributes> implements faqsAttributes {
  id!: number;
  title!: string;
  description!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof faqs {
    return sequelize.define('faqs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
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
    tableName: 'faqs',
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
    ]
  }) as typeof faqs;
  }
}
