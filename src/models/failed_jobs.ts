import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface failed_jobsAttributes {
  id: number;
  uuid: string;
  connection: string;
  queue: string;
  payload: string;
  exception: string;
  failed_at: Date;
}

export type failed_jobsPk = "id";
export type failed_jobsId = failed_jobs[failed_jobsPk];
export type failed_jobsOptionalAttributes = "id" | "failed_at";
export type failed_jobsCreationAttributes = Optional<failed_jobsAttributes, failed_jobsOptionalAttributes>;

export class failed_jobs extends Model<failed_jobsAttributes, failed_jobsCreationAttributes> implements failed_jobsAttributes {
  id!: number;
  uuid!: string;
  connection!: string;
  queue!: string;
  payload!: string;
  exception!: string;
  failed_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof failed_jobs {
    return sequelize.define('failed_jobs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "failed_jobs_uuid_unique"
    },
    connection: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    queue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exception: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    failed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'failed_jobs',
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
        name: "failed_jobs_uuid_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  }) as typeof failed_jobs;
  }
}
