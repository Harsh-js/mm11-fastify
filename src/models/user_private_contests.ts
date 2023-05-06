import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { private_contests, private_contestsId } from './private_contests';
import type { user_teams, user_teamsId } from './user_teams';
import type { users, usersId } from './users';

export interface user_private_contestsAttributes {
  id: string;
  fixture_id: number;
  user_id: string;
  private_contest_id: string;
  user_team_id: string;
  inning_number?: number;
  rank?: number;
  prize?: number;
  payment_data?: object;
  created_at?: Date;
  updated_at?: Date;
}

export type user_private_contestsPk = "id";
export type user_private_contestsId = user_private_contests[user_private_contestsPk];
export type user_private_contestsOptionalAttributes = "fixture_id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type user_private_contestsCreationAttributes = Optional<user_private_contestsAttributes, user_private_contestsOptionalAttributes>;

export class user_private_contests extends Model<user_private_contestsAttributes, user_private_contestsCreationAttributes> implements user_private_contestsAttributes {
  id!: string;
  fixture_id!: number;
  user_id!: string;
  private_contest_id!: string;
  user_team_id!: string;
  inning_number?: number;
  rank?: number;
  prize?: number;
  payment_data?: object;
  created_at?: Date;
  updated_at?: Date;

  // user_private_contests belongsTo private_contests via private_contest_id
  private_contest!: private_contests;
  getPrivate_contest!: Sequelize.BelongsToGetAssociationMixin<private_contests>;
  setPrivate_contest!: Sequelize.BelongsToSetAssociationMixin<private_contests, private_contestsId>;
  createPrivate_contest!: Sequelize.BelongsToCreateAssociationMixin<private_contests>;
  // user_private_contests belongsTo user_teams via user_team_id
  user_team!: user_teams;
  getUser_team!: Sequelize.BelongsToGetAssociationMixin<user_teams>;
  setUser_team!: Sequelize.BelongsToSetAssociationMixin<user_teams, user_teamsId>;
  createUser_team!: Sequelize.BelongsToCreateAssociationMixin<user_teams>;
  // user_private_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_private_contests {
    return sequelize.define('user_private_contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    private_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'private_contests',
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
    tableName: 'user_private_contests',
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
        name: "user_private_contests_private_contest_id_user_team_id_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "private_contest_id" },
          { name: "user_team_id" },
        ]
      },
      {
        name: "user_private_contests_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_private_contests_user_team_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_team_id" },
        ]
      },
    ]
  }) as typeof user_private_contests;
  }
}
