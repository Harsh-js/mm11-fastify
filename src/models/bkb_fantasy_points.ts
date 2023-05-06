import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface bkb_fantasy_pointsAttributes {
  id: number;
  name: string;
  code: string;
  point: string;
  created_at?: Date;
  updated_at?: Date;
}

export type bkb_fantasy_pointsPk = "id";
export type bkb_fantasy_pointsId = bkb_fantasy_points[bkb_fantasy_pointsPk];
export type bkb_fantasy_pointsOptionalAttributes = "id" | "created_at" | "updated_at";
export type bkb_fantasy_pointsCreationAttributes = Optional<bkb_fantasy_pointsAttributes, bkb_fantasy_pointsOptionalAttributes>;

export class bkb_fantasy_points extends Model<bkb_fantasy_pointsAttributes, bkb_fantasy_pointsCreationAttributes> implements bkb_fantasy_pointsAttributes {
  id!: number;
  name!: string;
  code!: string;
  point!: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof bkb_fantasy_points {
    return sequelize.define('bkb_fantasy_points', {
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
    }
  }, {
    tableName: 'bkb_fantasy_points',
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
    ]
  }) as typeof bkb_fantasy_points;
  }
}
