import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contest_categories, contest_categoriesId } from './contest_categories';
import type { kbd_fixtures, kbd_fixturesId } from './kbd_fixtures';
import type { kbd_user_contests, kbd_user_contestsId } from './kbd_user_contests';

export interface kbd_contestsAttributes {
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
  auto_create_on_full: number;
  is_mega_contest: number;
  status: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  discount: number;
  type: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI' | 'BONUS';
  bonus: number;
  pdf?: object;
  created_at?: Date;
  updated_at?: Date;
}

export type kbd_contestsPk = "id";
export type kbd_contestsId = kbd_contests[kbd_contestsPk];
export type kbd_contestsOptionalAttributes = "contest_template_id" | "inning_number" | "is_dynamic" | "dynamic_min_team" | "payment_data" | "commission" | "new_prize_breakup" | "is_mega_contest" | "status" | "discount" | "type" | "bonus" | "pdf" | "created_at" | "updated_at";
export type kbd_contestsCreationAttributes = Optional<kbd_contestsAttributes, kbd_contestsOptionalAttributes>;

export class kbd_contests extends Model<kbd_contestsAttributes, kbd_contestsCreationAttributes> implements kbd_contestsAttributes {
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
  auto_create_on_full!: number;
  is_mega_contest!: number;
  status!: 'NOT STARTED' | 'LIVE' | 'IN REVIEW' | 'COMPLETED' | 'CANCELED';
  discount!: number;
  type!: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI' | 'BONUS';
  bonus!: number;
  pdf?: object;
  created_at?: Date;
  updated_at?: Date;

  // kbd_contests belongsTo contest_categories via contest_category_id
  contest_category!: contest_categories;
  getContest_category!: Sequelize.BelongsToGetAssociationMixin<contest_categories>;
  setContest_category!: Sequelize.BelongsToSetAssociationMixin<contest_categories, contest_categoriesId>;
  createContest_category!: Sequelize.BelongsToCreateAssociationMixin<contest_categories>;
  // kbd_contests hasMany kbd_user_contests via contest_id
  kbd_user_contests!: kbd_user_contests[];
  getKbd_user_contests!: Sequelize.HasManyGetAssociationsMixin<kbd_user_contests>;
  setKbd_user_contests!: Sequelize.HasManySetAssociationsMixin<kbd_user_contests, kbd_user_contestsId>;
  addKbd_user_contest!: Sequelize.HasManyAddAssociationMixin<kbd_user_contests, kbd_user_contestsId>;
  addKbd_user_contests!: Sequelize.HasManyAddAssociationsMixin<kbd_user_contests, kbd_user_contestsId>;
  createKbd_user_contest!: Sequelize.HasManyCreateAssociationMixin<kbd_user_contests>;
  removeKbd_user_contest!: Sequelize.HasManyRemoveAssociationMixin<kbd_user_contests, kbd_user_contestsId>;
  removeKbd_user_contests!: Sequelize.HasManyRemoveAssociationsMixin<kbd_user_contests, kbd_user_contestsId>;
  hasKbd_user_contest!: Sequelize.HasManyHasAssociationMixin<kbd_user_contests, kbd_user_contestsId>;
  hasKbd_user_contests!: Sequelize.HasManyHasAssociationsMixin<kbd_user_contests, kbd_user_contestsId>;
  countKbd_user_contests!: Sequelize.HasManyCountAssociationsMixin;
  // kbd_contests belongsTo kbd_fixtures via fixture_id
  fixture!: kbd_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<kbd_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<kbd_fixtures, kbd_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<kbd_fixtures>;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_contests {
    return sequelize.define('kbd_contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'kbd_fixtures',
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
      allowNull: true,
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
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.ENUM('PRACTICE','PAID','FREE','DISCOUNT','MINI','BONUS'),
      allowNull: false,
      defaultValue: "PAID"
    },
    bonus: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pdf: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'kbd_contests',
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
  }) as typeof kbd_contests;
  }
}
