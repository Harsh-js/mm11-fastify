import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface contest_templatesAttributes {
  id: number;
  contest_category_id: string;
  name: string;
  sports_type: 'CRICKET' | 'FOOTBALL' | 'KABADDI' | 'BASKETBALL' | 'BASEBALL' | 'HOCKEY';
  inning: number;
  description?: string;
  total_teams: number;
  entry_fee: number;
  max_team: number;
  prize: number;
  winner_percentage: number;
  is_confirmed: number;
  prize_breakup: object;
  auto_add: number;
  auto_create_on_full: number;
  commission: number;
  type: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI' | 'BONUS' | 'MULTI_JOIN';
  discount: number;
  bonus: number;
  is_mega_contest: number;
  is_dynamic: number;
  dynamic_min_team: number;
  pdf?: object;
  created_at?: Date;
  updated_at?: Date;
}

export type contest_templatesPk = "id";
export type contest_templatesId = contest_templates[contest_templatesPk];
export type contest_templatesOptionalAttributes = "id" | "inning" | "description" | "type" | "discount" | "bonus" | "is_mega_contest" | "is_dynamic" | "dynamic_min_team" | "pdf" | "created_at" | "updated_at";
export type contest_templatesCreationAttributes = Optional<contest_templatesAttributes, contest_templatesOptionalAttributes>;

export class contest_templates extends Model<contest_templatesAttributes, contest_templatesCreationAttributes> implements contest_templatesAttributes {
  id!: number;
  contest_category_id!: string;
  name!: string;
  sports_type!: 'CRICKET' | 'FOOTBALL' | 'KABADDI' | 'BASKETBALL' | 'BASEBALL' | 'HOCKEY';
  inning!: number;
  description?: string;
  total_teams!: number;
  entry_fee!: number;
  max_team!: number;
  prize!: number;
  winner_percentage!: number;
  is_confirmed!: number;
  prize_breakup!: object;
  auto_add!: number;
  auto_create_on_full!: number;
  commission!: number;
  type!: 'PRACTICE' | 'PAID' | 'FREE' | 'DISCOUNT' | 'MINI' | 'BONUS' | 'MULTI_JOIN';
  discount!: number;
  bonus!: number;
  is_mega_contest!: number;
  is_dynamic!: number;
  dynamic_min_team!: number;
  pdf?: object;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof contest_templates {
    return sequelize.define('contest_templates', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contest_category_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sports_type: {
      type: DataTypes.ENUM('CRICKET','FOOTBALL','KABADDI','BASKETBALL','BASEBALL','HOCKEY'),
      allowNull: false
    },
    inning: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
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
    auto_add: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    auto_create_on_full: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    commission: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
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
    },
    is_mega_contest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_dynamic: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Normal Contest,1-Dynamic Contest"
    },
    dynamic_min_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Minimum team required to run dynamic contest"
    },
    pdf: {
      type: DataTypes.JSON,
      allowNull: true
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
    tableName: 'contest_templates',
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
          { name: "sports_type" },
        ]
      },
    ]
  }) as typeof contest_templates;
  }
}
