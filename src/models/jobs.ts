import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface jobsAttributes {
  id: number;
  queue: string;
  payload: string;
  attempts: number;
  reserved_at?: number;
  available_at: number;
  created_at: number;
}

export type jobsPk = "id";
export type jobsId = jobs[jobsPk];
export type jobsOptionalAttributes = "id" | "reserved_at";
export type jobsCreationAttributes = Optional<jobsAttributes, jobsOptionalAttributes>;

export class jobs extends Model<jobsAttributes, jobsCreationAttributes> implements jobsAttributes {
  id!: number;
  queue!: string;
  payload!: string;
  attempts!: number;
  reserved_at?: number;
  available_at!: number;
  created_at!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof jobs {
    return sequelize.define('jobs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    queue: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attempts: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    reserved_at: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    available_at: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    created_at: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'jobs',
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
        name: "jobs_queue_index",
        using: "BTREE",
        fields: [
          { name: "queue" },
        ]
      },
    ]
  }) as typeof jobs;
  }
}
