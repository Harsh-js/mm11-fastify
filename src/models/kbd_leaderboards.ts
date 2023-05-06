import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_competitions, kbd_competitionsId } from './kbd_competitions';
import type { users, usersId } from './users';

export interface kbd_leaderboardsAttributes {
  id: number;
  competition_id: number;
  user_id: string;
  total_point: number;
  rank: number;
  created_at: Date;
  updated_at: Date;
}

export type kbd_leaderboardsPk = "id";
export type kbd_leaderboardsId = kbd_leaderboards[kbd_leaderboardsPk];
export type kbd_leaderboardsOptionalAttributes = "id" | "rank";
export type kbd_leaderboardsCreationAttributes = Optional<kbd_leaderboardsAttributes, kbd_leaderboardsOptionalAttributes>;

export class kbd_leaderboards extends Model<kbd_leaderboardsAttributes, kbd_leaderboardsCreationAttributes> implements kbd_leaderboardsAttributes {
  id!: number;
  competition_id!: number;
  user_id!: string;
  total_point!: number;
  rank!: number;
  created_at!: Date;
  updated_at!: Date;

  // kbd_leaderboards belongsTo kbd_competitions via competition_id
  competition!: kbd_competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<kbd_competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<kbd_competitions, kbd_competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<kbd_competitions>;
  // kbd_leaderboards belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_leaderboards {
    return sequelize.define('kbd_leaderboards', {
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
        model: 'kbd_competitions',
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
      type: DataTypes.DECIMAL(10,0),
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
    tableName: 'kbd_leaderboards',
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
  }) as typeof kbd_leaderboards;
  }
}
