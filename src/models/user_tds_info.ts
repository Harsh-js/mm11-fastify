import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface user_tds_infoAttributes {
  id: number;
  user_id: string;
  financial_year: string;
  total_deposit?: number;
  total_withdraw?: number;
  tds_amount?: number;
  created_at: Date;
  updated_at: Date;
}

export type user_tds_infoPk = "id";
export type user_tds_infoId = user_tds_info[user_tds_infoPk];
export type user_tds_infoOptionalAttributes = "id" | "total_deposit" | "total_withdraw" | "tds_amount";
export type user_tds_infoCreationAttributes = Optional<user_tds_infoAttributes, user_tds_infoOptionalAttributes>;

export class user_tds_info extends Model<user_tds_infoAttributes, user_tds_infoCreationAttributes> implements user_tds_infoAttributes {
  id!: number;
  user_id!: string;
  financial_year!: string;
  total_deposit?: number;
  total_withdraw?: number;
  tds_amount?: number;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof user_tds_info {
    return sequelize.define('user_tds_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    financial_year: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    total_deposit: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    total_withdraw: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    tds_amount: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'user_tds_info',
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
    ]
  }) as typeof user_tds_info;
  }
}
