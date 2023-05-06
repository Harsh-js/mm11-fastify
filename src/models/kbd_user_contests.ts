import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_contests, kbd_contestsId } from './kbd_contests';
import type { kbd_user_teams, kbd_user_teamsId } from './kbd_user_teams';

export interface kbd_user_contestsAttributes {
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

export type kbd_user_contestsPk = "id";
export type kbd_user_contestsId = kbd_user_contests[kbd_user_contestsPk];
export type kbd_user_contestsOptionalAttributes = "id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type kbd_user_contestsCreationAttributes = Optional<kbd_user_contestsAttributes, kbd_user_contestsOptionalAttributes>;

export class kbd_user_contests extends Model<kbd_user_contestsAttributes, kbd_user_contestsCreationAttributes> implements kbd_user_contestsAttributes {
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

  // kbd_user_contests belongsTo kbd_contests via contest_id
  contest!: kbd_contests;
  getContest!: Sequelize.BelongsToGetAssociationMixin<kbd_contests>;
  setContest!: Sequelize.BelongsToSetAssociationMixin<kbd_contests, kbd_contestsId>;
  createContest!: Sequelize.BelongsToCreateAssociationMixin<kbd_contests>;
  // kbd_user_contests belongsTo kbd_user_teams via user_team_id
  user_team!: kbd_user_teams;
  getUser_team!: Sequelize.BelongsToGetAssociationMixin<kbd_user_teams>;
  setUser_team!: Sequelize.BelongsToSetAssociationMixin<kbd_user_teams, kbd_user_teamsId>;
  createUser_team!: Sequelize.BelongsToCreateAssociationMixin<kbd_user_teams>;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_user_contests {
    return sequelize.define('kbd_user_contests', {
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
      allowNull: false
    },
    contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'kbd_contests',
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
    tableName: 'kbd_user_contests',
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
  }) as typeof kbd_user_contests;
  }
}
