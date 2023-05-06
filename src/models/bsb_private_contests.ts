import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_fixtures, bsb_fixturesId } from './bsb_fixtures';
import type { bsb_user_private_contests, bsb_user_private_contestsId } from './bsb_user_private_contests';
import type { users, usersId } from './users';

export interface bsb_private_contestsAttributes {
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

export type bsb_private_contestsPk = "id";
export type bsb_private_contestsId = bsb_private_contests[bsb_private_contestsPk];
export type bsb_private_contestsOptionalAttributes = "inning_number" | "commission" | "new_prize_breakup" | "status" | "created_at" | "updated_at";
export type bsb_private_contestsCreationAttributes = Optional<bsb_private_contestsAttributes, bsb_private_contestsOptionalAttributes>;

export class bsb_private_contests extends Model<bsb_private_contestsAttributes, bsb_private_contestsCreationAttributes> implements bsb_private_contestsAttributes {
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

  // bsb_private_contests belongsTo bsb_fixtures via fixture_id
  fixture!: bsb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<bsb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<bsb_fixtures, bsb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<bsb_fixtures>;
  // bsb_private_contests hasMany bsb_user_private_contests via private_contest_id
  bsb_user_private_contests!: bsb_user_private_contests[];
  getBsb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_user_private_contests>;
  setBsb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  addBsb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  addBsb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  createBsb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_user_private_contests>;
  removeBsb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  removeBsb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  hasBsb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  hasBsb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_user_private_contests, bsb_user_private_contestsId>;
  countBsb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bsb_private_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_private_contests {
    return sequelize.define('bsb_private_contests', {
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
        model: 'bsb_fixtures',
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
    }
  }, {
    tableName: 'bsb_private_contests',
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
  }) as typeof bsb_private_contests;
  }
}
