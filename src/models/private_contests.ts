import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fixtures, fixturesId } from './fixtures';
import type { payments, paymentsId } from './payments';
import type { user_private_contests, user_private_contestsId } from './user_private_contests';
import type { users, usersId } from './users';

export interface private_contestsAttributes {
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
  prize_breakup: object;
  new_prize_breakup?: object;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  created_at?: Date;
  updated_at?: Date;
}

export type private_contestsPk = "id";
export type private_contestsId = private_contests[private_contestsPk];
export type private_contestsOptionalAttributes = "inning_number" | "commission" | "new_prize_breakup" | "status" | "created_at" | "updated_at";
export type private_contestsCreationAttributes = Optional<private_contestsAttributes, private_contestsOptionalAttributes>;

export class private_contests extends Model<private_contestsAttributes, private_contestsCreationAttributes> implements private_contestsAttributes {
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
  prize_breakup!: object;
  new_prize_breakup?: object;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  created_at?: Date;
  updated_at?: Date;

  // private_contests belongsTo fixtures via fixture_id
  fixture!: fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<fixtures, fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<fixtures>;
  // private_contests hasMany payments via private_contest_id
  payments!: payments[];
  getPayments!: Sequelize.HasManyGetAssociationsMixin<payments>;
  setPayments!: Sequelize.HasManySetAssociationsMixin<payments, paymentsId>;
  addPayment!: Sequelize.HasManyAddAssociationMixin<payments, paymentsId>;
  addPayments!: Sequelize.HasManyAddAssociationsMixin<payments, paymentsId>;
  createPayment!: Sequelize.HasManyCreateAssociationMixin<payments>;
  removePayment!: Sequelize.HasManyRemoveAssociationMixin<payments, paymentsId>;
  removePayments!: Sequelize.HasManyRemoveAssociationsMixin<payments, paymentsId>;
  hasPayment!: Sequelize.HasManyHasAssociationMixin<payments, paymentsId>;
  hasPayments!: Sequelize.HasManyHasAssociationsMixin<payments, paymentsId>;
  countPayments!: Sequelize.HasManyCountAssociationsMixin;
  // private_contests hasMany user_private_contests via private_contest_id
  user_private_contests!: user_private_contests[];
  getUser_private_contests!: Sequelize.HasManyGetAssociationsMixin<user_private_contests>;
  setUser_private_contests!: Sequelize.HasManySetAssociationsMixin<user_private_contests, user_private_contestsId>;
  addUser_private_contest!: Sequelize.HasManyAddAssociationMixin<user_private_contests, user_private_contestsId>;
  addUser_private_contests!: Sequelize.HasManyAddAssociationsMixin<user_private_contests, user_private_contestsId>;
  createUser_private_contest!: Sequelize.HasManyCreateAssociationMixin<user_private_contests>;
  removeUser_private_contest!: Sequelize.HasManyRemoveAssociationMixin<user_private_contests, user_private_contestsId>;
  removeUser_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<user_private_contests, user_private_contestsId>;
  hasUser_private_contest!: Sequelize.HasManyHasAssociationMixin<user_private_contests, user_private_contestsId>;
  hasUser_private_contests!: Sequelize.HasManyHasAssociationsMixin<user_private_contests, user_private_contestsId>;
  countUser_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // private_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof private_contests {
    return sequelize.define('private_contests', {
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
        model: 'fixtures',
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
      type: DataTypes.JSON,
      allowNull: false
    },
    new_prize_breakup: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('NOT STARTED','LIVE','IN REVIEW','COMPLETED','CANCELED'),
      allowNull: false,
      defaultValue: "NOT STARTED"
    }
  }, {
    tableName: 'private_contests',
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
  }) as typeof private_contests;
  }
}
