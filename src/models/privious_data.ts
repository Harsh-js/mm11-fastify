import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface privious_dataAttributes {
  id: number;
  email?: string;
  bonus?: number;
  deposit?: number;
  winning?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type privious_dataPk = "id";
export type privious_dataId = privious_data[privious_dataPk];
export type privious_dataOptionalAttributes = "id" | "email" | "bonus" | "deposit" | "winning" | "created_at" | "updated_at";
export type privious_dataCreationAttributes = Optional<privious_dataAttributes, privious_dataOptionalAttributes>;

export class privious_data extends Model<privious_dataAttributes, privious_dataCreationAttributes> implements privious_dataAttributes {
  id!: number;
  email?: string;
  bonus?: number;
  deposit?: number;
  winning?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof privious_data {
    return sequelize.define('privious_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bonus: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    deposit: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    winning: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
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
    tableName: 'privious_data',
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
  }) as typeof privious_data;
  }
}
