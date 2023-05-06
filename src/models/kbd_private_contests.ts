import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { kbd_user_private_contests, kbd_user_private_contestsId } from './kbd_user_private_contests';

export interface kbd_private_contestsAttributes {
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

export type kbd_private_contestsPk = "id";
export type kbd_private_contestsId = kbd_private_contests[kbd_private_contestsPk];
export type kbd_private_contestsOptionalAttributes = "inning_number" | "commission" | "new_prize_breakup" | "status" | "created_at" | "updated_at";
export type kbd_private_contestsCreationAttributes = Optional<kbd_private_contestsAttributes, kbd_private_contestsOptionalAttributes>;

export class kbd_private_contests extends Model<kbd_private_contestsAttributes, kbd_private_contestsCreationAttributes> implements kbd_private_contestsAttributes {
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

  // kbd_private_contests hasMany kbd_user_private_contests via private_contest_id
  kbd_user_private_contests!: kbd_user_private_contests[];
  getKbd_user_private_contests!: Sequelize.HasManyGetAssociationsMixin<kbd_user_private_contests>;
  setKbd_user_private_contests!: Sequelize.HasManySetAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  addKbd_user_private_contest!: Sequelize.HasManyAddAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  addKbd_user_private_contests!: Sequelize.HasManyAddAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  createKbd_user_private_contest!: Sequelize.HasManyCreateAssociationMixin<kbd_user_private_contests>;
  removeKbd_user_private_contest!: Sequelize.HasManyRemoveAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  removeKbd_user_private_contests!: Sequelize.HasManyRemoveAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  hasKbd_user_private_contest!: Sequelize.HasManyHasAssociationMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  hasKbd_user_private_contests!: Sequelize.HasManyHasAssociationsMixin<kbd_user_private_contests, kbd_user_private_contestsId>;
  countKbd_user_private_contests!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_private_contests {
    return sequelize.define('kbd_private_contests', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    fixture_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
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
    tableName: 'kbd_private_contests',
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
  }) as typeof kbd_private_contests;
  }
}
