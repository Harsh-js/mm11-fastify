import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface logsAttributes {
  id: number;
  action?: string;
  user_email: string;
  created_at?: Date;
  updated_at?: Date;
}

export type logsPk = "id";
export type logsId = logs[logsPk];
export type logsOptionalAttributes = "id" | "action" | "created_at" | "updated_at";
export type logsCreationAttributes = Optional<logsAttributes, logsOptionalAttributes>;

export class logs extends Model<logsAttributes, logsCreationAttributes> implements logsAttributes {
  id!: number;
  action?: string;
  user_email!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof logs {
    return sequelize.define('logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_email: {
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
    tableName: 'logs',
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
  }) as typeof logs;
  }
}
