import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface kbd_fantasy_pointsAttributes {
  id: number;
  name: string;
  code: string;
  point: string;
  created_at?: Date;
  updated_at?: Date;
}

export type kbd_fantasy_pointsPk = "id";
export type kbd_fantasy_pointsId = kbd_fantasy_points[kbd_fantasy_pointsPk];
export type kbd_fantasy_pointsOptionalAttributes = "id" | "created_at" | "updated_at";
export type kbd_fantasy_pointsCreationAttributes = Optional<kbd_fantasy_pointsAttributes, kbd_fantasy_pointsOptionalAttributes>;

export class kbd_fantasy_points extends Model<kbd_fantasy_pointsAttributes, kbd_fantasy_pointsCreationAttributes> implements kbd_fantasy_pointsAttributes {
  id!: number;
  name!: string;
  code!: string;
  point!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof kbd_fantasy_points {
    return sequelize.define('kbd_fantasy_points', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    point: {
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
    tableName: 'kbd_fantasy_points',
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
  }) as typeof kbd_fantasy_points;
  }
}
