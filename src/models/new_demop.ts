import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface new_demopAttributes {
  id: number;
  influncer_id: string;
  influncer_username: string;
  new_user: number;
  total_deposit?: number;
  entry_fee: number;
  join_team: number;
  total_commission: number;
  game_id: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '998' | '999';
  date: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type new_demopPk = "id";
export type new_demopId = new_demop[new_demopPk];
export type new_demopOptionalAttributes = "id" | "new_user" | "total_deposit" | "entry_fee" | "join_team" | "total_commission" | "date" | "created_at" | "updated_at";
export type new_demopCreationAttributes = Optional<new_demopAttributes, new_demopOptionalAttributes>;

export class new_demop extends Model<new_demopAttributes, new_demopCreationAttributes> implements new_demopAttributes {
  id!: number;
  influncer_id!: string;
  influncer_username!: string;
  new_user!: number;
  total_deposit?: number;
  entry_fee!: number;
  join_team!: number;
  total_commission!: number;
  game_id!: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '998' | '999';
  date!: Date;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof new_demop {
    return sequelize.define('new_demop', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    influncer_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    influncer_username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    new_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total_deposit: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    entry_fee: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    join_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total_commission: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    game_id: {
      type: DataTypes.ENUM('1','2','3','4','5','6','7','8','9','10','998','999'),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'new_demop',
    timestamps: true
  }) as typeof new_demop;
  }
}
