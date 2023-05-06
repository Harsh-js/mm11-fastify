import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface copy_leaderboardsAttributes {
  id: number;
  competition_id: number;
  user_id: string;
  total_point: number;
  rank: number;
  created_at: Date;
  updated_at: Date;
}

export type copy_leaderboardsPk = "id";
export type copy_leaderboardsId = copy_leaderboards[copy_leaderboardsPk];
export type copy_leaderboardsOptionalAttributes = "id" | "rank";
export type copy_leaderboardsCreationAttributes = Optional<copy_leaderboardsAttributes, copy_leaderboardsOptionalAttributes>;

export class copy_leaderboards extends Model<copy_leaderboardsAttributes, copy_leaderboardsCreationAttributes> implements copy_leaderboardsAttributes {
  id!: number;
  competition_id!: number;
  user_id!: string;
  total_point!: number;
  rank!: number;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof copy_leaderboards {
    return sequelize.define('copy_leaderboards', {
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
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'copy_leaderboards',
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
  }) as typeof copy_leaderboards;
  }
}
