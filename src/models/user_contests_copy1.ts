import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface user_contests_copy1Attributes {
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

export type user_contests_copy1Pk = "id";
export type user_contests_copy1Id = user_contests_copy1[user_contests_copy1Pk];
export type user_contests_copy1OptionalAttributes = "id" | "inning_number" | "rank" | "prize" | "payment_data" | "created_at" | "updated_at";
export type user_contests_copy1CreationAttributes = Optional<user_contests_copy1Attributes, user_contests_copy1OptionalAttributes>;

export class user_contests_copy1 extends Model<user_contests_copy1Attributes, user_contests_copy1CreationAttributes> implements user_contests_copy1Attributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof user_contests_copy1 {
    return sequelize.define('user_contests_copy1', {
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
      allowNull: false
    },
    user_team_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
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
    tableName: 'user_contests_copy1',
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
  }) as typeof user_contests_copy1;
  }
}
