import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { competitions, competitionsId } from './competitions';
import type { users, usersId } from './users';

export interface leaderboardsAttributes {
  id: number;
  competition_id: number;
  user_id: string;
  total_point: number;
  rank: number;
  created_at: Date;
  updated_at: Date;
}

export type leaderboardsPk = "id";
export type leaderboardsId = leaderboards[leaderboardsPk];
export type leaderboardsOptionalAttributes = "id" | "rank";
export type leaderboardsCreationAttributes = Optional<leaderboardsAttributes, leaderboardsOptionalAttributes>;

export class leaderboards extends Model<leaderboardsAttributes, leaderboardsCreationAttributes> implements leaderboardsAttributes {
  id!: number;
  competition_id!: number;
  user_id!: string;
  total_point!: number;
  rank!: number;
  created_at!: Date;
  updated_at!: Date;

  // leaderboards belongsTo competitions via competition_id
  competition!: competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<competitions, competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<competitions>;
  // leaderboards belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof leaderboards {
    return sequelize.define('leaderboards', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    competition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'competitions',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
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
    tableName: 'leaderboards',
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
  }) as typeof leaderboards;
  }
}
