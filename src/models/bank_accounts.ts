import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { states, statesId } from './states';
import type { users, usersId } from './users';

export interface bank_accountsAttributes {
  id: number;
  user_id: string;
  name: string;
  account_number: string;
  branch: string;
  ifsc_code: string;
  bankName: string;
  photo: string;
  state_id?: number;
  status: 'PENDING' | 'VERIFIED' | 'UNLINKED' | 'REJECTED';
  message: string;
  beneficiary_id?: string;
  ease_beneficiary_id?: string;
  ease_contact_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type bank_accountsPk = "id";
export type bank_accountsId = bank_accounts[bank_accountsPk];
export type bank_accountsOptionalAttributes = "id" | "state_id" | "status" | "beneficiary_id" | "ease_beneficiary_id" | "ease_contact_id" | "created_at" | "updated_at";
export type bank_accountsCreationAttributes = Optional<bank_accountsAttributes, bank_accountsOptionalAttributes>;

export class bank_accounts extends Model<bank_accountsAttributes, bank_accountsCreationAttributes> implements bank_accountsAttributes {
  id!: number;
  user_id!: string;
  name!: string;
  account_number!: string;
  branch!: string;
  ifsc_code!: string;
  bankName!: string;
  photo!: string;
  state_id?: number;
  status!: 'PENDING' | 'VERIFIED' | 'UNLINKED' | 'REJECTED';
  message!: string;
  beneficiary_id?: string;
  ease_beneficiary_id?: string;
  ease_contact_id?: string;
  created_at?: Date;
  updated_at?: Date;

  // bank_accounts belongsTo states via state_id
  state!: states;
  getState!: Sequelize.BelongsToGetAssociationMixin<states>;
  setState!: Sequelize.BelongsToSetAssociationMixin<states, statesId>;
  createState!: Sequelize.BelongsToCreateAssociationMixin<states>;
  // bank_accounts belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bank_accounts {
    return sequelize.define('bank_accounts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    branch: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ifsc_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bankName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    state_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'states',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('PENDING','VERIFIED','UNLINKED','REJECTED'),
      allowNull: false,
      defaultValue: "PENDING"
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    beneficiary_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ease_beneficiary_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ease_contact_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'bank_accounts',
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
        name: "bank_accounts_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "bank_accounts_state_id_foreign",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  }) as typeof bank_accounts;
  }
}
