import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contest_categories, contest_categoriesId } from './contest_categories';
import type { ftb_fixtures, ftb_fixturesId } from './ftb_fixtures';
import type { ftb_user_contests, ftb_user_contestsId } from './ftb_user_contests';

export interface ftb_contestsAttributes {
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
  type: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI' | 'BONUS';
  discount: number;
  bonus: number;
  created_at?: Date;
  updated_at?: Date;
}

export type ftb_contestsPk = "id";
export type ftb_contestsId = ftb_contests[ftb_contestsPk];
export type ftb_contestsOptionalAttributes = "fixture_id" | "contest_template_id" | "inning_number" | "is_dynamic" | "dynamic_min_team" | "payment_data" | "commission" | "new_prize_breakup" | "pdf" | "is_mega_contest" | "status" | "type" | "discount" | "bonus" | "created_at" | "updated_at";
export type ftb_contestsCreationAttributes = Optional<ftb_contestsAttributes, ftb_contestsOptionalAttributes>;

export class ftb_contests extends Model<ftb_contestsAttributes, ftb_contestsCreationAttributes> implements ftb_contestsAttributes {
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
  type!: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI' | 'BONUS';
  discount!: number;
  bonus!: number;
  created_at?: Date;
  updated_at?: Date;

  // ftb_contests belongsTo contest_categories via contest_category_id
  contest_category!: contest_categories;
  getContest_category!: Sequelize.BelongsToGetAssociationMixin<contest_categories>;
  setContest_category!: Sequelize.BelongsToSetAssociationMixin<contest_categories, contest_categoriesId>;
  createContest_category!: Sequelize.BelongsToCreateAssociationMixin<contest_categories>;
  // ftb_contests hasMany ftb_user_contests via contest_id
  ftb_user_contests!: ftb_user_contests[];
  getFtb_user_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_user_contests>;
  setFtb_user_contests!: Sequelize.HasManySetAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  addFtb_user_contest!: Sequelize.HasManyAddAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  addFtb_user_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  createFtb_user_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_user_contests>;
  removeFtb_user_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  removeFtb_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  hasFtb_user_contest!: Sequelize.HasManyHasAssociationMixin<ftb_user_contests, ftb_user_contestsId>;
  hasFtb_user_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_user_contests, ftb_user_contestsId>;
  countFtb_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // ftb_contests belongsTo ftb_fixtures via fixture_id
  fixture!: ftb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<ftb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<ftb_fixtures, ftb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<ftb_fixtures>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_contests {
    return sequelize.define('ftb_contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'ftb_fixtures',
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
      type: DataTypes.ENUM('PRACTICE','PAID','FREE','DISCOUNT','MINI','BONUS'),
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
    tableName: 'ftb_contests',
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
  }) as typeof ftb_contests;
  }
}
