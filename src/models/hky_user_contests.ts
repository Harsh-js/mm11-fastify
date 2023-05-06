import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hky_contests, hky_contestsId } from './hky_contests';
import type { hky_user_teams, hky_user_teamsId } from './hky_user_teams';
import type { users, usersId } from './users';

export interface hky_user_contestsAttributes {
  id: number;
  fixture_id: number;
  user_id: string;
  contest_id: string;
  user_team_id: string;
  inning_number?: number;
  rank?: number;
  prize?: number;
  payment_data?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type hky_user_contestsPk = "id";
export type hky_user_contestsId = hky_user_contests[hky_user_contestsPk];
export type hky_user_contestsOptionalAttributes = "id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type hky_user_contestsCreationAttributes = Optional<hky_user_contestsAttributes, hky_user_contestsOptionalAttributes>;

export class hky_user_contests extends Model<hky_user_contestsAttributes, hky_user_contestsCreationAttributes> implements hky_user_contestsAttributes {
  id!: number;
  fixture_id!: number;
  user_id!: string;
  contest_id!: string;
  user_team_id!: string;
  inning_number?: number;
  rank?: number;
  prize?: number;
  payment_data?: string;
  created_at?: Date;
  updated_at?: Date;

  // hky_user_contests belongsTo hky_contests via contest_id
  contest!: hky_contests;
  getContest!: Sequelize.BelongsToGetAssociationMixin<hky_contests>;
  setContest!: Sequelize.BelongsToSetAssociationMixin<hky_contests, hky_contestsId>;
  createContest!: Sequelize.BelongsToCreateAssociationMixin<hky_contests>;
  // hky_user_contests belongsTo hky_user_teams via user_team_id
  user_team!: hky_user_teams;
  getUser_team!: Sequelize.BelongsToGetAssociationMixin<hky_user_teams>;
  setUser_team!: Sequelize.BelongsToSetAssociationMixin<hky_user_teams, hky_user_teamsId>;
  createUser_team!: Sequelize.BelongsToCreateAssociationMixin<hky_user_teams>;
  // hky_user_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_user_contests {
    return sequelize.define('hky_user_contests', {
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
        model: 'hky_contests',
        key: 'id'
      }
    },
    user_team_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'hky_user_teams',
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
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'hky_user_contests',
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
    ]
  }) as typeof hky_user_contests;
  }
}
