import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { states, statesId } from './states';
import type { users, usersId } from './users';

export interface adhaarAttributes {
  id: number;
  user_id: string;
  name: string;
  adhaar_number?: string;
  bankName?: string;
  photo?: string;
  back_photo?: string;
  state_id?: number;
  status: 'PENDING' | 'VERIFIED' | 'UNLINKED' | 'REJECTED';
  message: string;
  beneficiary_id?: string;
  ease_beneficiary_id?: string;
  ease_contact_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type adhaarPk = "id";
export type adhaarId = adhaar[adhaarPk];
export type adhaarOptionalAttributes = "id" | "adhaar_number" | "bankName" | "photo" | "back_photo" | "state_id" | "status" | "beneficiary_id" | "ease_beneficiary_id" | "ease_contact_id" | "created_at" | "updated_at";
export type adhaarCreationAttributes = Optional<adhaarAttributes, adhaarOptionalAttributes>;

export class adhaar extends Model<adhaarAttributes, adhaarCreationAttributes> implements adhaarAttributes {
  id!: number;
  user_id!: string;
  name!: string;
  adhaar_number?: string;
  bankName?: string;
  photo?: string;
  back_photo?: string;
  state_id?: number;
  status!: 'PENDING' | 'VERIFIED' | 'UNLINKED' | 'REJECTED';
  message!: string;
  beneficiary_id?: string;
  ease_beneficiary_id?: string;
  ease_contact_id?: string;
  created_at?: Date;
  updated_at?: Date;

  // adhaar belongsTo states via state_id
  state!: states;
  getState!: Sequelize.BelongsToGetAssociationMixin<states>;
  setState!: Sequelize.BelongsToSetAssociationMixin<states, statesId>;
  createState!: Sequelize.BelongsToCreateAssociationMixin<states>;
  // adhaar belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof adhaar {
    return sequelize.define('adhaar', {
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
    adhaar_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    back_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'adhaar',
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
        name: "adhaar_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "adhaar_state_id_foreign",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  }) as typeof adhaar;
  }
}
