import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { competitions, competitionsId } from './competitions';
import type { users, usersId } from './users';

export interface investment_leaderboardsAttributes {
  id: number;
  competition_id: number;
  user_id: string;
  total_amount: number;
  rank: number;
  date_range?: string;
  created_at: Date;
  updated_at: Date;
}

export type investment_leaderboardsPk = "id";
export type investment_leaderboardsId = investment_leaderboards[investment_leaderboardsPk];
export type investment_leaderboardsOptionalAttributes = "id" | "rank" | "date_range";
export type investment_leaderboardsCreationAttributes = Optional<investment_leaderboardsAttributes, investment_leaderboardsOptionalAttributes>;

export class investment_leaderboards extends Model<investment_leaderboardsAttributes, investment_leaderboardsCreationAttributes> implements investment_leaderboardsAttributes {
  id!: number;
  competition_id!: number;
  user_id!: string;
  total_amount!: number;
  rank!: number;
  date_range?: string;
  created_at!: Date;
  updated_at!: Date;

  // investment_leaderboards belongsTo competitions via competition_id
  competition!: competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<competitions, competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<competitions>;
  // investment_leaderboards belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof investment_leaderboards {
    return sequelize.define('investment_leaderboards', {
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
    total_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_range: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'investment_leaderboards',
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
  }) as typeof investment_leaderboards;
  }
}
