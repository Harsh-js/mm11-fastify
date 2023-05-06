import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface adminsAttributes {
  id: number;
  role_id: number;
  name: string;
  page_access?: string;
  email: string;
  password: string;
  pin: string;
  remember_token?: string;
  phone?: string;
  otp?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type adminsPk = "id";
export type adminsId = admins[adminsPk];
export type adminsOptionalAttributes = "id" | "page_access" | "remember_token" | "phone" | "otp" | "created_at" | "updated_at";
export type adminsCreationAttributes = Optional<adminsAttributes, adminsOptionalAttributes>;

export class admins extends Model<adminsAttributes, adminsCreationAttributes> implements adminsAttributes {
  id!: number;
  role_id!: number;
  name!: string;
  page_access?: string;
  email!: string;
  password!: string;
  pin!: string;
  remember_token?: string;
  phone?: string;
  otp?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof admins {
    return sequelize.define('admins', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    page_access: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "admins_email_unique"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    otp: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'admins',
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
        name: "admins_email_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  }) as typeof admins;
  }
}
