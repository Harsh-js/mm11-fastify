import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface xx_extraAttributes {
  user_id: string;
  email: string;
  phone: string;
  prize?: number;
  is_deducted?: number;
}

export type xx_extraOptionalAttributes = "prize" | "is_deducted";
export type xx_extraCreationAttributes = Optional<xx_extraAttributes, xx_extraOptionalAttributes>;

export class xx_extra extends Model<xx_extraAttributes, xx_extraCreationAttributes> implements xx_extraAttributes {
  user_id!: string;
  email!: string;
  phone!: string;
  prize?: number;
  is_deducted?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof xx_extra {
    return sequelize.define('xx_extra', {
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    email: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    phone: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    prize: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    is_deducted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'xx_extra',
    timestamps: false,
    indexes: [
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof xx_extra;
  }
}
