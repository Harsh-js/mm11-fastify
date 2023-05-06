import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contest_categories, contest_categoriesId } from './contest_categories';
import type { fixtures, fixturesId } from './fixtures';
import type { payments, paymentsId } from './payments';
import type { user_contests, user_contestsId } from './user_contests';

export interface contestsAttributes {
  id: string;
  fixture_id: number;
  contest_template_id: number;
  contest_category_id: string;
  inning_number?: number;
  is_dynamic?: number;
  dynamic_min_team: number;
  payment_data?: object;
  invite_code: string;
  commission: number;
  total_teams: number;
  is_full?: number;
  entry_fee: number;
  max_team: number;
  prize: number;
  winner_percentage: number;
  is_confirmed: number;
  prize_breakup: object;
  new_prize_breakup?: object;
  pdf?: object;
  auto_create_on_full: number;
  created_type: number;
  is_mega_contest: number;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  type: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI' | 'BONUS' | 'MULTI_JOIN';
  discount: number;
  bonus: number;
  created_at?: Date;
  updated_at?: Date;
}

export type contestsPk = "id";
export type contestsId = contests[contestsPk];
export type contestsOptionalAttributes = "contest_template_id" | "inning_number" | "is_dynamic" | "dynamic_min_team" | "payment_data" | "commission" | "is_full" | "new_prize_breakup" | "pdf" | "created_type" | "is_mega_contest" | "status" | "type" | "discount" | "bonus" | "created_at" | "updated_at";
export type contestsCreationAttributes = Optional<contestsAttributes, contestsOptionalAttributes>;

export class contests extends Model<contestsAttributes, contestsCreationAttributes> implements contestsAttributes {
  id!: string;
  fixture_id!: number;
  contest_template_id!: number;
  contest_category_id!: string;
  inning_number?: number;
  is_dynamic?: number;
  dynamic_min_team!: number;
  payment_data?: object;
  invite_code!: string;
  commission!: number;
  total_teams!: number;
  is_full?: number;
  entry_fee!: number;
  max_team!: number;
  prize!: number;
  winner_percentage!: number;
  is_confirmed!: number;
  prize_breakup!: object;
  new_prize_breakup?: object;
  pdf?: object;
  auto_create_on_full!: number;
  created_type!: number;
  is_mega_contest!: number;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  type!: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI' | 'BONUS' | 'MULTI_JOIN';
  discount!: number;
  bonus!: number;
  created_at?: Date;
  updated_at?: Date;

  // contests belongsTo contest_categories via contest_category_id
  contest_category!: contest_categories;
  getContest_category!: Sequelize.BelongsToGetAssociationMixin<contest_categories>;
  setContest_category!: Sequelize.BelongsToSetAssociationMixin<contest_categories, contest_categoriesId>;
  createContest_category!: Sequelize.BelongsToCreateAssociationMixin<contest_categories>;
  // contests hasMany payments via contest_id
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
  // contests hasMany user_contests via contest_id
  user_contests!: user_contests[];
  getUser_contests!: Sequelize.HasManyGetAssociationsMixin<user_contests>;
  setUser_contests!: Sequelize.HasManySetAssociationsMixin<user_contests, user_contestsId>;
  addUser_contest!: Sequelize.HasManyAddAssociationMixin<user_contests, user_contestsId>;
  addUser_contests!: Sequelize.HasManyAddAssociationsMixin<user_contests, user_contestsId>;
  createUser_contest!: Sequelize.HasManyCreateAssociationMixin<user_contests>;
  removeUser_contest!: Sequelize.HasManyRemoveAssociationMixin<user_contests, user_contestsId>;
  removeUser_contests!: Sequelize.HasManyRemoveAssociationsMixin<user_contests, user_contestsId>;
  hasUser_contest!: Sequelize.HasManyHasAssociationMixin<user_contests, user_contestsId>;
  hasUser_contests!: Sequelize.HasManyHasAssociationsMixin<user_contests, user_contestsId>;
  countUser_contests!: Sequelize.HasManyCountAssociationsMixin;
  // contests belongsTo fixtures via fixture_id
  fixture!: fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<fixtures, fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<fixtures>;

  static initModel(sequelize: Sequelize.Sequelize): typeof contests {
    return sequelize.define('contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'fixtures',
        key: 'id'
      }
    },
    contest_template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contest_category_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'contest_categories',
        key: 'id'
      }
    },
    inning_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_dynamic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dynamic_min_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Minimum team required to run dynamic contest"
    },
    payment_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    invite_code: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    is_full: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
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
    pdf: {
      type: DataTypes.JSON,
      allowNull: true
    },
    auto_create_on_full: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_mega_contest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('NOT STARTED','LIVE','IN REVIEW','COMPLETED','CANCELED'),
      allowNull: false,
      defaultValue: "NOT STARTED"
    },
    type: {
      type: DataTypes.ENUM('PRACTICE','PAID','FREE','DISCOUNT','MINI','BONUS','MULTI_JOIN'),
      allowNull: false,
      defaultValue: "PAID"
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bonus: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    tableName: 'contests',
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
        name: "contests_fixture_id_foreign",
        using: "BTREE",
        fields: [
          { name: "fixture_id" },
        ]
      },
      {
        name: "contests_contest_category_id_foreign",
        using: "BTREE",
        fields: [
          { name: "contest_category_id" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  }) as typeof contests;
  }
}
