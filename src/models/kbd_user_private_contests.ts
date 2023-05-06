import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_private_contests, kbd_private_contestsId } from './kbd_private_contests';
import type { kbd_user_teams, kbd_user_teamsId } from './kbd_user_teams';
import type { users, usersId } from './users';

export interface kbd_user_private_contestsAttributes {
  id: string;
  fixture_id: number;
  user_id: string;
  private_contest_id: string;
  user_team_id: string;
  inning_number: number;
  rank?: number;
  prize?: number;
  payment_data?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type kbd_user_private_contestsPk = "id";
export type kbd_user_private_contestsId = kbd_user_private_contests[kbd_user_private_contestsPk];
export type kbd_user_private_contestsOptionalAttributes = "fixture_id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type kbd_user_private_contestsCreationAttributes = Optional<kbd_user_private_contestsAttributes, kbd_user_private_contestsOptionalAttributes>;

export class kbd_user_private_contests extends Model<kbd_user_private_contestsAttributes, kbd_user_private_contestsCreationAttributes> implements kbd_user_private_contestsAttributes {
  id!: string;
  fixture_id!: number;
  user_id!: string;
  private_contest_id!: string;
  user_team_id!: string;
  inning_number!: number;
  rank?: number;
  prize?: number;
  payment_data?: string;
  created_at?: Date;
  updated_at?: Date;

  // kbd_user_private_contests belongsTo kbd_private_contests via private_contest_id
  private_contest!: kbd_private_contests;
  getPrivate_contest!: Sequelize.BelongsToGetAssociationMixin<kbd_private_contests>;
  setPrivate_contest!: Sequelize.BelongsToSetAssociationMixin<kbd_private_contests, kbd_private_contestsId>;
  createPrivate_contest!: Sequelize.BelongsToCreateAssociationMixin<kbd_private_contests>;
  // kbd_user_private_contests belongsTo kbd_user_teams via user_team_id
  user_team!: kbd_user_teams;
  getUser_team!: Sequelize.BelongsToGetAssociationMixin<kbd_user_teams>;
  setUser_team!: Sequelize.BelongsToSetAssociationMixin<kbd_user_teams, kbd_user_teamsId>;
  createUser_team!: Sequelize.BelongsToCreateAssociationMixin<kbd_user_teams>;
  // kbd_user_private_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_user_private_contests {
    return sequelize.define('kbd_user_private_contests', {
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
        model: 'kbd_private_contests',
        key: 'id'
      }
    },
    user_team_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'kbd_user_teams',
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
    }
  }, {
    tableName: 'kbd_user_private_contests',
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
  }) as typeof kbd_user_private_contests;
  }
}
