import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contest_categories, contest_categoriesId } from './contest_categories';
import type { hky_fixtures, hky_fixturesId } from './hky_fixtures';
import type { hky_user_contests, hky_user_contestsId } from './hky_user_contests';

export interface hky_contestsAttributes {
  id: string;
  fixture_id: number;
  contest_template_id: number;
  contest_category_id: string;
  inning_number?: number;
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

export type hky_contestsPk = "id";
export type hky_contestsId = hky_contests[hky_contestsPk];
export type hky_contestsOptionalAttributes = "contest_template_id" | "inning_number" | "is_dynamic" | "dynamic_min_team" | "payment_data" | "commission" | "new_prize_breakup" | "pdf" | "is_mega_contest" | "status" | "type" | "discount" | "bonus" | "created_at" | "updated_at";
export type hky_contestsCreationAttributes = Optional<hky_contestsAttributes, hky_contestsOptionalAttributes>;

export class hky_contests extends Model<hky_contestsAttributes, hky_contestsCreationAttributes> implements hky_contestsAttributes {
  id!: string;
  fixture_id!: number;
  contest_template_id!: number;
  contest_category_id!: string;
  inning_number?: number;
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

  // hky_contests belongsTo contest_categories via contest_category_id
  contest_category!: contest_categories;
  getContest_category!: Sequelize.BelongsToGetAssociationMixin<contest_categories>;
  setContest_category!: Sequelize.BelongsToSetAssociationMixin<contest_categories, contest_categoriesId>;
  createContest_category!: Sequelize.BelongsToCreateAssociationMixin<contest_categories>;
  // hky_contests hasMany hky_user_contests via contest_id
  hky_user_contests!: hky_user_contests[];
  getHky_user_contests!: Sequelize.HasManyGetAssociationsMixin<hky_user_contests>;
  setHky_user_contests!: Sequelize.HasManySetAssociationsMixin<hky_user_contests, hky_user_contestsId>;
  addHky_user_contest!: Sequelize.HasManyAddAssociationMixin<hky_user_contests, hky_user_contestsId>;
  addHky_user_contests!: Sequelize.HasManyAddAssociationsMixin<hky_user_contests, hky_user_contestsId>;
  createHky_user_contest!: Sequelize.HasManyCreateAssociationMixin<hky_user_contests>;
  removeHky_user_contest!: Sequelize.HasManyRemoveAssociationMixin<hky_user_contests, hky_user_contestsId>;
  removeHky_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<hky_user_contests, hky_user_contestsId>;
  hasHky_user_contest!: Sequelize.HasManyHasAssociationMixin<hky_user_contests, hky_user_contestsId>;
  hasHky_user_contests!: Sequelize.HasManyHasAssociationsMixin<hky_user_contests, hky_user_contestsId>;
  countHky_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // hky_contests belongsTo hky_fixtures via fixture_id
  fixture!: hky_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<hky_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<hky_fixtures, hky_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<hky_fixtures>;

  static initModel(sequelize: Sequelize.Sequelize): typeof hky_contests {
    return sequelize.define('hky_contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'hky_fixtures',
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
    tableName: 'hky_contests',
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
  }) as typeof hky_contests;
  }
}
