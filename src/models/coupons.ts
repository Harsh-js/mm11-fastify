import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface couponsAttributes {
  id: number;
  code: string;
  min_amount: number;
  max_amount: number;
  max_cashback: number;
  cashback_percentage: number;
  usage_limit: number;
  limit_per_user: number;
  expire_at?: string;
  wallet_type: 'MAIN' | 'BONUS' | 'BOTH';
  bonus_percentage: number;
  main_percentage: number;
  is_active: number;
  created_at?: Date;
  updated_at?: Date;
}

export type couponsPk = "id";
export type couponsId = coupons[couponsPk];
export type couponsOptionalAttributes = "id" | "max_amount" | "expire_at" | "bonus_percentage" | "main_percentage" | "created_at" | "updated_at";
export type couponsCreationAttributes = Optional<couponsAttributes, couponsOptionalAttributes>;

export class coupons extends Model<couponsAttributes, couponsCreationAttributes> implements couponsAttributes {
  id!: number;
  code!: string;
  min_amount!: number;
  max_amount!: number;
  max_cashback!: number;
  cashback_percentage!: number;
  usage_limit!: number;
  limit_per_user!: number;
  expire_at?: string;
  wallet_type!: 'MAIN' | 'BONUS' | 'BOTH';
  bonus_percentage!: number;
  main_percentage!: number;
  is_active!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof coupons {
    return sequelize.define('coupons', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "coupons_code_unique"
    },
    min_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    max_cashback: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cashback_percentage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    usage_limit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    limit_per_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expire_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    wallet_type: {
      type: DataTypes.ENUM('MAIN','BONUS','BOTH'),
      allowNull: false
    },
    bonus_percentage: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    main_percentage: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'coupons',
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
        name: "coupons_code_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  }) as typeof coupons;
  }
}
