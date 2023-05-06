import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface influncer_export_dataAttributes {
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

export type influncer_export_dataPk = "id";
export type influncer_export_dataId = influncer_export_data[influncer_export_dataPk];
export type influncer_export_dataOptionalAttributes = "id" | "new_user" | "total_deposit" | "entry_fee" | "join_team" | "total_commission" | "date" | "created_at" | "updated_at";
export type influncer_export_dataCreationAttributes = Optional<influncer_export_dataAttributes, influncer_export_dataOptionalAttributes>;

export class influncer_export_data extends Model<influncer_export_dataAttributes, influncer_export_dataCreationAttributes> implements influncer_export_dataAttributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof influncer_export_data {
    return sequelize.define('influncer_export_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'influncer_export_data',
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
    ]
  }) as typeof influncer_export_data;
  }
}
