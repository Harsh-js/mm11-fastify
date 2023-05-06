import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_contests, bsb_contestsId } from './bsb_contests';
import type { bsb_user_teams, bsb_user_teamsId } from './bsb_user_teams';
import type { users, usersId } from './users';

export interface bsb_user_contestsAttributes {
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

export type bsb_user_contestsPk = "id";
export type bsb_user_contestsId = bsb_user_contests[bsb_user_contestsPk];
export type bsb_user_contestsOptionalAttributes = "id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type bsb_user_contestsCreationAttributes = Optional<bsb_user_contestsAttributes, bsb_user_contestsOptionalAttributes>;

export class bsb_user_contests extends Model<bsb_user_contestsAttributes, bsb_user_contestsCreationAttributes> implements bsb_user_contestsAttributes {
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

  // bsb_user_contests belongsTo bsb_contests via contest_id
  contest!: bsb_contests;
  getContest!: Sequelize.BelongsToGetAssociationMixin<bsb_contests>;
  setContest!: Sequelize.BelongsToSetAssociationMixin<bsb_contests, bsb_contestsId>;
  createContest!: Sequelize.BelongsToCreateAssociationMixin<bsb_contests>;
  // bsb_user_contests belongsTo bsb_user_teams via user_team_id
  user_team!: bsb_user_teams;
  getUser_team!: Sequelize.BelongsToGetAssociationMixin<bsb_user_teams>;
  setUser_team!: Sequelize.BelongsToSetAssociationMixin<bsb_user_teams, bsb_user_teamsId>;
  createUser_team!: Sequelize.BelongsToCreateAssociationMixin<bsb_user_teams>;
  // bsb_user_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_user_contests {
    return sequelize.define('bsb_user_contests', {
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
        model: 'bsb_contests',
        key: 'id'
      }
    },
    user_team_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'bsb_user_teams',
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
    tableName: 'bsb_user_contests',
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
  }) as typeof bsb_user_contests;
  }
}
