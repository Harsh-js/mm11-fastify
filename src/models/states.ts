import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { adhaar, adhaarId } from './adhaar';
import type { bank_accounts, bank_accountsId } from './bank_accounts';
import type { users, usersId } from './users';

export interface statesAttributes {
  id: number;
  name: string;
  is_active: number;
  created_at?: Date;
  updated_at?: Date;
}

export type statesPk = "id";
export type statesId = states[statesPk];
export type statesOptionalAttributes = "id" | "is_active" | "created_at" | "updated_at";
export type statesCreationAttributes = Optional<statesAttributes, statesOptionalAttributes>;

export class states extends Model<statesAttributes, statesCreationAttributes> implements statesAttributes {
  id!: number;
  name!: string;
  is_active!: number;
  created_at?: Date;
  updated_at?: Date;

  // states hasMany adhaar via state_id
  adhaars!: adhaar[];
  getAdhaars!: Sequelize.HasManyGetAssociationsMixin<adhaar>;
  setAdhaars!: Sequelize.HasManySetAssociationsMixin<adhaar, adhaarId>;
  addAdhaar!: Sequelize.HasManyAddAssociationMixin<adhaar, adhaarId>;
  addAdhaars!: Sequelize.HasManyAddAssociationsMixin<adhaar, adhaarId>;
  createAdhaar!: Sequelize.HasManyCreateAssociationMixin<adhaar>;
  removeAdhaar!: Sequelize.HasManyRemoveAssociationMixin<adhaar, adhaarId>;
  removeAdhaars!: Sequelize.HasManyRemoveAssociationsMixin<adhaar, adhaarId>;
  hasAdhaar!: Sequelize.HasManyHasAssociationMixin<adhaar, adhaarId>;
  hasAdhaars!: Sequelize.HasManyHasAssociationsMixin<adhaar, adhaarId>;
  countAdhaars!: Sequelize.HasManyCountAssociationsMixin;
  // states hasMany bank_accounts via state_id
  bank_accounts!: bank_accounts[];
  getBank_accounts!: Sequelize.HasManyGetAssociationsMixin<bank_accounts>;
  setBank_accounts!: Sequelize.HasManySetAssociationsMixin<bank_accounts, bank_accountsId>;
  addBank_account!: Sequelize.HasManyAddAssociationMixin<bank_accounts, bank_accountsId>;
  addBank_accounts!: Sequelize.HasManyAddAssociationsMixin<bank_accounts, bank_accountsId>;
  createBank_account!: Sequelize.HasManyCreateAssociationMixin<bank_accounts>;
  removeBank_account!: Sequelize.HasManyRemoveAssociationMixin<bank_accounts, bank_accountsId>;
  removeBank_accounts!: Sequelize.HasManyRemoveAssociationsMixin<bank_accounts, bank_accountsId>;
  hasBank_account!: Sequelize.HasManyHasAssociationMixin<bank_accounts, bank_accountsId>;
  hasBank_accounts!: Sequelize.HasManyHasAssociationsMixin<bank_accounts, bank_accountsId>;
  countBank_accounts!: Sequelize.HasManyCountAssociationsMixin;
  // states hasMany users via state_id
  users!: users[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<users>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<users, usersId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<users, usersId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<users, usersId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<users>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<users, usersId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<users, usersId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<users, usersId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<users, usersId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof states {
    return sequelize.define('states', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "states_name_unique"
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
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
    tableName: 'states',
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
        name: "states_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  }) as typeof states;
  }
}
