import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface leaderboard_week_detailsAttributes {
  id: number;
  competition_id: number;
  week_id: number;
  user_id: string;
  total_point: number;
  rank: number;
  created_at: Date;
  updated_at: Date;
}

export type leaderboard_week_detailsPk = "id";
export type leaderboard_week_detailsId = leaderboard_week_details[leaderboard_week_detailsPk];
export type leaderboard_week_detailsOptionalAttributes = "id" | "rank" | "created_at" | "updated_at";
export type leaderboard_week_detailsCreationAttributes = Optional<leaderboard_week_detailsAttributes, leaderboard_week_detailsOptionalAttributes>;

export class leaderboard_week_details extends Model<leaderboard_week_detailsAttributes, leaderboard_week_detailsCreationAttributes> implements leaderboard_week_detailsAttributes {
  id!: number;
  competition_id!: number;
  week_id!: number;
  user_id!: string;
  total_point!: number;
  rank!: number;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof leaderboard_week_details {
    return sequelize.define('leaderboard_week_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    competition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    week_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    total_point: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'leaderboard_week_details',
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
        name: "competition_id",
        using: "BTREE",
        fields: [
          { name: "competition_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof leaderboard_week_details;
  }
}
