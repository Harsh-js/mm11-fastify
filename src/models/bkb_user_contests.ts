import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_contests, bkb_contestsId } from './bkb_contests';
import type { bkb_user_teams, bkb_user_teamsId } from './bkb_user_teams';
import type { users, usersId } from './users';

export interface bkb_user_contestsAttributes {
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

export type bkb_user_contestsPk = "id";
export type bkb_user_contestsId = bkb_user_contests[bkb_user_contestsPk];
export type bkb_user_contestsOptionalAttributes = "id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type bkb_user_contestsCreationAttributes = Optional<bkb_user_contestsAttributes, bkb_user_contestsOptionalAttributes>;

export class bkb_user_contests extends Model<bkb_user_contestsAttributes, bkb_user_contestsCreationAttributes> implements bkb_user_contestsAttributes {
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

  // bkb_user_contests belongsTo bkb_contests via contest_id
  contest!: bkb_contests;
  getContest!: Sequelize.BelongsToGetAssociationMixin<bkb_contests>;
  setContest!: Sequelize.BelongsToSetAssociationMixin<bkb_contests, bkb_contestsId>;
  createContest!: Sequelize.BelongsToCreateAssociationMixin<bkb_contests>;
  // bkb_user_contests belongsTo bkb_user_teams via user_team_id
  user_team!: bkb_user_teams;
  getUser_team!: Sequelize.BelongsToGetAssociationMixin<bkb_user_teams>;
  setUser_team!: Sequelize.BelongsToSetAssociationMixin<bkb_user_teams, bkb_user_teamsId>;
  createUser_team!: Sequelize.BelongsToCreateAssociationMixin<bkb_user_teams>;
  // bkb_user_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_user_contests {
    return sequelize.define('bkb_user_contests', {
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
        model: 'bkb_contests',
        key: 'id'
      }
    },
    user_team_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'bkb_user_teams',
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
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'bkb_user_contests',
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
  }) as typeof bkb_user_contests;
  }
}
