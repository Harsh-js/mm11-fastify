import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface notificationsAttributes {
  id: number;
  user_id?: string;
  type: 'TRANSACTIONAL' | 'PROMOTIONAL' | 'GAMEPLAY' | 'PROFILE' | 'SOCIAL';
  subject: string;
  message: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;
}

export type notificationsPk = "id";
export type notificationsId = notifications[notificationsPk];
export type notificationsOptionalAttributes = "id" | "user_id" | "created_at" | "updated_at";
export type notificationsCreationAttributes = Optional<notificationsAttributes, notificationsOptionalAttributes>;

export class notifications extends Model<notificationsAttributes, notificationsCreationAttributes> implements notificationsAttributes {
  id!: number;
  user_id?: string;
  type!: 'TRANSACTIONAL' | 'PROMOTIONAL' | 'GAMEPLAY' | 'PROFILE' | 'SOCIAL';
  subject!: string;
  message!: string;
  image!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof notifications {
    return sequelize.define('notifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('TRANSACTIONAL','PROMOTIONAL','GAMEPLAY','PROFILE','SOCIAL'),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    tableName: 'notifications',
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
  }) as typeof notifications;
  }
}
