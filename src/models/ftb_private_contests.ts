import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ftb_fixtures, ftb_fixturesId } from './ftb_fixtures';
import type { ftb_user_private_contests, ftb_user_private_contestsId } from './ftb_user_private_contests';
import type { users, usersId } from './users';

export interface ftb_private_contestsAttributes {
  id: string;
  user_id: string;
  fixture_id: number;
  invite_code: string;
  contest_name: string;
  inning_number: number;
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

export type ftb_private_contestsPk = "id";
export type ftb_private_contestsId = ftb_private_contests[ftb_private_contestsPk];
export type ftb_private_contestsOptionalAttributes = "inning_number" | "commission" | "new_prize_breakup" | "status" | "created_at" | "updated_at";
export type ftb_private_contestsCreationAttributes = Optional<ftb_private_contestsAttributes, ftb_private_contestsOptionalAttributes>;

export class ftb_private_contests extends Model<ftb_private_contestsAttributes, ftb_private_contestsCreationAttributes> implements ftb_private_contestsAttributes {
  id!: string;
  user_id!: string;
  fixture_id!: number;
  invite_code!: string;
  contest_name!: string;
  inning_number!: number;
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

  // ftb_private_contests belongsTo ftb_fixtures via fixture_id
  fixture!: ftb_fixtures;
  getFixture!: Sequelize.BelongsToGetAssociationMixin<ftb_fixtures>;
  setFixture!: Sequelize.BelongsToSetAssociationMixin<ftb_fixtures, ftb_fixturesId>;
  createFixture!: Sequelize.BelongsToCreateAssociationMixin<ftb_fixtures>;
  // ftb_private_contests hasMany ftb_user_private_contests via private_contest_id
  ftb_user_private_contests!: ftb_user_private_contests[];
  getFtb_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_user_private_contests>;
  setFtb_user_private_contests!: Sequelize.HasManySetAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  addFtb_user_private_contest!: Sequelize.HasManyAddAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  addFtb_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  createFtb_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_user_private_contests>;
  removeFtb_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  removeFtb_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  hasFtb_user_private_contest!: Sequelize.HasManyHasAssociationMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  hasFtb_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_user_private_contests, ftb_user_private_contestsId>;
  countFtb_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;
  // ftb_private_contests belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ftb_private_contests {
    return sequelize.define('ftb_private_contests', {
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
        model: 'ftb_fixtures',
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
      allowNull: false,
      defaultValue: 0
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
    tableName: 'ftb_private_contests',
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
  }) as typeof ftb_private_contests;
  }
}
