import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface settingsAttributes {
  id: number;
  key: string;
  value: string;
}

export type settingsPk = "id";
export type settingsId = settings[settingsPk];
export type settingsOptionalAttributes = "id";
export type settingsCreationAttributes = Optional<settingsAttributes, settingsOptionalAttributes>;

export class settings extends Model<settingsAttributes, settingsCreationAttributes> implements settingsAttributes {
  id!: number;
  key!: string;
  value!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof settings {
    return sequelize.define('settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "settings_key_unique"
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'settings',
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
        name: "settings_key_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key" },
        ]
      },
    ]
  }) as typeof settings;
  }
}
