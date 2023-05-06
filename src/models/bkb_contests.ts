import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_fixtures, bkb_fixturesId } from './bkb_fixtures';
import type { bkb_user_contests, bkb_user_contestsId } from './bkb_user_contests';
import type { contest_categories, contest_categoriesId } from './contest_categories';

export interface bkb_contestsAttributes {
  id: string;
  fixture_id?: number;
  contest_template_id: number;
  contest_category_id: string;
  inning_number: number;
  is_dynamic?: number;
  dynamic_min_team: number;
  payment_data?: string;
  invite_code: string;
  commission: number;
  total_teams: number;
  entry_fee: number;
  max_team: number;
  prize: number;
  winner_percentage: number;
  is_confirmed: number;
  prize_breakup: string;
  new_prize_breakup?: string;
  pdf?: object;
  auto_create_on_full: number;
  is_mega_contest: number;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  type: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI';
  discount: number;
  bonus: number;
  created_at?: Date;
  updated_at?: Date;
}

export type bkb_contestsPk = "id";
export type bkb_contestsId = bkb_contests[bkb_contestsPk];
export type bkb_contestsOptionalAttributes = "fixture_id" | "contest_template_id" | "inning_number" | "is_dynamic" | "dynamic_min_team" | "payment_data" | "commission" | "new_prize_breakup" | "pdf" | "is_mega_contest" | "status" | "type" | "discount" | "bonus" | "created_at" | "updated_at";
export type bkb_contestsCreationAttributes = Optional<bkb_contestsAttributes, bkb_contestsOptionalAttributes>;

export class bkb_contests extends Model<bkb_contestsAttributes, bkb_contestsCreationAttributes> implements bkb_contestsAttributes {
  id!: string;
  fixture_id?: number;
  contest_template_id!: number;
  contest_category_id!: string;
  inning_number!: number;
  is_dynamic?: number;
  dynamic_min_team!: number;
  payment_data?: string;
  invite_code!: string;
  commission!: number;
  total_teams!: number;
  entry_fee!: number;
  max_team!: number;
  prize!: number;
  winner_percentage!: number;
  is_confirmed!: number;
  prize_breakup!: string;
  new_prize_breakup?: string;
  pdf?: object;
  auto_create_on_full!: number;
  is_mega_contest!: number;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  type!: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI';
  discount!: number;
  bonus!: number;
  created_at?: Date;
  updated_at?: Date;

  // bkb_contests hasMany bkb_user_contests via contest_id
  bkb_user_contests!: bkb_user_contests[];
  getBkb_user_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_user_contests>;
  setBkb_user_contests!: Sequelize.HasManySetAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  addBkb_user_contest!: Sequelize.HasManyAddAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  addBkb_user_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  createBkb_user_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_user_contests>;
  removeBkb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  removeBkb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  hasBkb_user_contest!: Sequelize.HasManyHasAssociationMixin<bkb_user_contests, bkb_user_contestsId>;
  hasBkb_user_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_user_contests, bkb_user_contestsId>;
  countBkb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bkb_contests belongsTo bkb_fixtures via fixture_id
  fixture!: bkb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<bkb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<bkb_fixtures, bkb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<bkb_fixtures>;
  // bkb_contests belongsTo contest_categories via contest_category_id
  contest_category!: contest_categories;
  getContest_category!: Sequelize.BelongsToGetAssociationMixin<contest_categories>;
  setContest_category!: Sequelize.BelongsToSetAssociationMixin<contest_categories, contest_categoriesId>;
  createContest_category!: Sequelize.BelongsToCreateAssociationMixin<contest_categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_contests {
    return sequelize.define('bkb_contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'bkb_fixtures',
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
      allowNull: false,
      defaultValue: 0
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
      type: DataTypes.TEXT,
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
    pdf: {
      type: DataTypes.JSON,
      allowNull: true
    },
    auto_create_on_full: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
      type: DataTypes.ENUM('PRACTICE','PAID','FREE','DISCOUNT','MINI'),
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
    tableName: 'bkb_contests',
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
    ]
  }) as typeof bkb_contests;
  }
}
