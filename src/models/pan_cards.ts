import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface pan_cardsAttributes {
  id: number;
  user_id: string;
  name: string;
  pan_number: string;
  date_of_birth: string;
  is_verified: number;
  photo: string;
  status: 'PENDING' | 'VERIFIED' | 'UNLINKED' | 'REJECTED';
  message: string;
  created_at?: Date;
  updated_at?: Date;
}

export type pan_cardsPk = "id";
export type pan_cardsId = pan_cards[pan_cardsPk];
export type pan_cardsOptionalAttributes = "id" | "is_verified" | "status" | "created_at" | "updated_at";
export type pan_cardsCreationAttributes = Optional<pan_cardsAttributes, pan_cardsOptionalAttributes>;

export class pan_cards extends Model<pan_cardsAttributes, pan_cardsCreationAttributes> implements pan_cardsAttributes {
  id!: number;
  user_id!: string;
  name!: string;
  pan_number!: string;
  date_of_birth!: string;
  is_verified!: number;
  photo!: string;
  status!: 'PENDING' | 'VERIFIED' | 'UNLINKED' | 'REJECTED';
  message!: string;
  created_at?: Date;
  updated_at?: Date;

  // pan_cards belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pan_cards {
    return sequelize.define('pan_cards', {
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
    pan_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('PENDING','VERIFIED','UNLINKED','REJECTED'),
      allowNull: false,
      defaultValue: "PENDING"
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'pan_cards',
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
        name: "pan_cards_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof pan_cards;
  }
}
