import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bsb_fixtures, bsb_fixturesId } from './bsb_fixtures';
import type { bsb_user_contests, bsb_user_contestsId } from './bsb_user_contests';
import type { contest_categories, contest_categoriesId } from './contest_categories';

export interface bsb_contestsAttributes {
  id: string;
  fixture_id: number;
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

export type bsb_contestsPk = "id";
export type bsb_contestsId = bsb_contests[bsb_contestsPk];
export type bsb_contestsOptionalAttributes = "contest_template_id" | "inning_number" | "is_dynamic" | "dynamic_min_team" | "payment_data" | "commission" | "new_prize_breakup" | "pdf" | "is_mega_contest" | "status" | "type" | "discount" | "bonus" | "created_at" | "updated_at";
export type bsb_contestsCreationAttributes = Optional<bsb_contestsAttributes, bsb_contestsOptionalAttributes>;

export class bsb_contests extends Model<bsb_contestsAttributes, bsb_contestsCreationAttributes> implements bsb_contestsAttributes {
  id!: string;
  fixture_id!: number;
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

  // bsb_contests hasMany bsb_user_contests via contest_id
  bsb_user_contests!: bsb_user_contests[];
  getBsb_user_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_user_contests>;
  setBsb_user_contests!: Sequelize.HasManySetAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  addBsb_user_contest!: Sequelize.HasManyAddAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  addBsb_user_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  createBsb_user_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_user_contests>;
  removeBsb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  removeBsb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  hasBsb_user_contest!: Sequelize.HasManyHasAssociationMixin<bsb_user_contests, bsb_user_contestsId>;
  hasBsb_user_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_user_contests, bsb_user_contestsId>;
  countBsb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // bsb_contests belongsTo bsb_fixtures via fixture_id
  fixture!: bsb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<bsb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<bsb_fixtures, bsb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<bsb_fixtures>;
  // bsb_contests belongsTo contest_categories via contest_category_id
  contest_category!: contest_categories;
  getContest_category!: Sequelize.BelongsToGetAssociationMixin<contest_categories>;
  setContest_category!: Sequelize.BelongsToSetAssociationMixin<contest_categories, contest_categoriesId>;
  createContest_category!: Sequelize.BelongsToCreateAssociationMixin<contest_categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bsb_contests {
    return sequelize.define('bsb_contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'bsb_fixtures',
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
    tableName: 'bsb_contests',
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
  }) as typeof bsb_contests;
  }
}
