import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_contests, ftb_contestsId } from './ftb_contests';
import type { ftb_user_teams, ftb_user_teamsId } from './ftb_user_teams';
import type { users, usersId } from './users';

export interface ftb_user_contestsAttributes {
  id: number;
  fixture_id: number;
  user_id: string;
  contest_id: string;
  user_team_id: string;
  inning_number: number;
  rank?: number;
  prize?: number;
  payment_data?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_user_contestsPk = "id";
export type ftb_user_contestsId = ftb_user_contests[ftb_user_contestsPk];
export type ftb_user_contestsOptionalAttributes = "id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type ftb_user_contestsCreationAttributes = Optional<ftb_user_contestsAttributes, ftb_user_contestsOptionalAttributes>;

export class ftb_user_contests extends Model<ftb_user_contestsAttributes, ftb_user_contestsCreationAttributes> implements ftb_user_contestsAttributes {
  id!: number;
  fixture_id!: number;
  user_id!: string;
  contest_id!: string;
  user_team_id!: string;
  inning_number!: number;
  rank?: number;
  prize?: number;
  payment_data?: string;
  created_at?: Date;
  updated_at?: Date;

  // ftb_user_contests belongsTo ftb_contests via contest_id
  contest!: ftb_contests;
  getContest!: Sequelize.BelongsToGetAssociationMixin<ftb_contests>;
  setContest!: Sequelize.BelongsToSetAssociationMixin<ftb_contests, ftb_contestsId>;
  createContest!: Sequelize.BelongsToCreateAssociationMixin<ftb_contests>;
  // ftb_user_contests belongsTo ftb_user_teams via user_team_id
  user_team!: ftb_user_teams;
  getUser_team!: Sequelize.BelongsToGetAssociationMixin<ftb_user_teams>;
  setUser_team!: Sequelize.BelongsToSetAssociationMixin<ftb_user_teams, ftb_user_teamsId>;
  createUser_team!: Sequelize.BelongsToCreateAssociationMixin<ftb_user_teams>;
  // ftb_user_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_user_contests {
    return sequelize.define('ftb_user_contests', {
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
        model: 'ftb_contests',
        key: 'id'
      }
    },
    user_team_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'ftb_user_teams',
        key: 'id'
      }
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'ftb_user_contests',
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
  }) as typeof ftb_user_contests;
  }
}
