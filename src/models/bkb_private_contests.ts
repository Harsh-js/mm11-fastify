import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_fixtures, bkb_fixturesId } from './bkb_fixtures';
import type { bkb_user_private_contests, bkb_user_private_contestsId } from './bkb_user_private_contests';
import type { users, usersId } from './users';

export interface bkb_private_contestsAttributes {
  id: string;
  user_id: string;
  fixture_id: number;
  invite_code: string;
  contest_name: string;
  inning_number?: number;
  commission: number;
  total_teams: number;
  entry_fee: number;
  max_team: number;
  prize: number;
  winner_percentage: number;
  is_confirmed: number;
  prize_breakup: string;
  new_prize_breakup?: string;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  created_at?: Date;
  updated_at?: Date;
}

export type bkb_private_contestsPk = "id";
export type bkb_private_contestsId = bkb_private_contests[bkb_private_contestsPk];
export type bkb_private_contestsOptionalAttributes = "inning_number" | "commission" | "new_prize_breakup" | "status" | "created_at" | "updated_at";
export type bkb_private_contestsCreationAttributes = Optional<bkb_private_contestsAttributes, bkb_private_contestsOptionalAttributes>;

export class bkb_private_contests extends Model<bkb_private_contestsAttributes, bkb_private_contestsCreationAttributes> implements bkb_private_contestsAttributes {
  id!: string;
  user_id!: string;
  fixture_id!: number;
  invite_code!: string;
  contest_name!: string;
  inning_number?: number;
  commission!: number;
  total_teams!: number;
  entry_fee!: number;
  max_team!: number;
  prize!: number;
  winner_percentage!: number;
  is_confirmed!: number;
  prize_breakup!: string;
  new_prize_breakup?: string;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  created_at?: Date;
  updated_at?: Date;

  // bkb_private_contests belongsTo bkb_fixtures via fixture_id
  fixture!: bkb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<bkb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<bkb_fixtures, bkb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<bkb_fixtures>;
  // bkb_private_contests hasMany bkb_user_private_contests via private_contest_id
  bkb_user_private_contests!: bkb_user_private_contests[];
  getBkb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_user_private_contests>;
  setBkb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  addBkb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  addBkb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  createBkb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_user_private_contests>;
  removeBkb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  removeBkb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  hasBkb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  hasBkb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_user_private_contests, bkb_user_private_contestsId>;
  countBkb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bkb_private_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_private_contests {
    return sequelize.define('bkb_private_contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bkb_fixtures',
        key: 'id'
      }
    },
    invite_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contest_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    commission: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    total_teams: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    entry_fee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_team: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prize: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    winner_percentage: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    is_confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    prize_breakup: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    new_prize_breakup: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('NOT STARTED','LIVE','IN REVIEW','COMPLETED','CANCELED'),
      allowNull: false,
      defaultValue: "NOT STARTED"
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
    tableName: 'bkb_private_contests',
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
        name: "private_contests_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "private_contests_fixture_id_foreign",
        using: "BTREE",
        fields: [
          { name: "fixture_id" },
        ]
      },
    ]
  }) as typeof bkb_private_contests;
  }
}
