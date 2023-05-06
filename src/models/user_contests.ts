import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contests, contestsId } from './contests';
import type { user_teams, user_teamsId } from './user_teams';
import type { users, usersId } from './users';

export interface user_contestsAttributes {
  id: number;
  fixture_id: number;
  user_id: string;
  contest_id: string;
  user_team_id: string;
  inning_number?: number;
  rank?: number;
  prize?: number;
  payment_data?: object;
  created_at?: Date;
  updated_at?: Date;
}

export type user_contestsPk = "id";
export type user_contestsId = user_contests[user_contestsPk];
export type user_contestsOptionalAttributes = "id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type user_contestsCreationAttributes = Optional<user_contestsAttributes, user_contestsOptionalAttributes>;

export class user_contests extends Model<user_contestsAttributes, user_contestsCreationAttributes> implements user_contestsAttributes {
  id!: number;
  fixture_id!: number;
  user_id!: string;
  contest_id!: string;
  user_team_id!: string;
  inning_number?: number;
  rank?: number;
  prize?: number;
  payment_data?: object;
  created_at?: Date;
  updated_at?: Date;

  // user_contests belongsTo contests via contest_id
  contest!: contests;
  getContest!: Sequelize.BelongsToGetAssociationMixin<contests>;
  setContest!: Sequelize.BelongsToSetAssociationMixin<contests, contestsId>;
  createContest!: Sequelize.BelongsToCreateAssociationMixin<contests>;
  // user_contests belongsTo user_teams via user_team_id
  user_team!: user_teams;
  getUser_team!: Sequelize.BelongsToGetAssociationMixin<user_teams>;
  setUser_team!: Sequelize.BelongsToSetAssociationMixin<user_teams, user_teamsId>;
  createUser_team!: Sequelize.BelongsToCreateAssociationMixin<user_teams>;
  // user_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_contests {
    return sequelize.define('user_contests', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'contests',
        key: 'id'
      }
    },
    user_team_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'user_teams',
        key: 'id'
      }
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rank: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    prize: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    payment_data: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'user_contests',
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
        name: "user_contests_contest_id_user_team_id_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contest_id" },
          { name: "user_team_id" },
        ]
      },
      {
        name: "user_contests_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_contests_user_team_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_team_id" },
        ]
      },
      {
        name: "rank",
        using: "BTREE",
        fields: [
          { name: "rank" },
        ]
      },
    ]
  }) as typeof user_contests;
  }
}
