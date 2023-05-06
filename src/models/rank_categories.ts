import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ranks, ranksId } from './ranks';

export interface rank_categoriesAttributes {
  id: number;
  name: string;
  winner: number;
  created_at?: Date;
  updated_at?: Date;
}

export type rank_categoriesPk = "id";
export type rank_categoriesId = rank_categories[rank_categoriesPk];
export type rank_categoriesOptionalAttributes = "id" | "created_at" | "updated_at";
export type rank_categoriesCreationAttributes = Optional<rank_categoriesAttributes, rank_categoriesOptionalAttributes>;

export class rank_categories extends Model<rank_categoriesAttributes, rank_categoriesCreationAttributes> implements rank_categoriesAttributes {
  id!: number;
  name!: string;
  winner!: number;
  created_at?: Date;
  updated_at?: Date;

  // rank_categories hasMany ranks via rank_category_id
  ranks!: ranks[];
  getRanks!: Sequelize.HasManyGetAssociationsMixin<ranks>;
  setRanks!: Sequelize.HasManySetAssociationsMixin<ranks, ranksId>;
  addRank!: Sequelize.HasManyAddAssociationMixin<ranks, ranksId>;
  addRanks!: Sequelize.HasManyAddAssociationsMixin<ranks, ranksId>;
  createRank!: Sequelize.HasManyCreateAssociationMixin<ranks>;
  removeRank!: Sequelize.HasManyRemoveAssociationMixin<ranks, ranksId>;
  removeRanks!: Sequelize.HasManyRemoveAssociationsMixin<ranks, ranksId>;
  hasRank!: Sequelize.HasManyHasAssociationMixin<ranks, ranksId>;
  hasRanks!: Sequelize.HasManyHasAssociationsMixin<ranks, ranksId>;
  countRanks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof rank_categories {
    return sequelize.define('rank_categories', {
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
    winner: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'rank_categories',
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
  }) as typeof rank_categories;
  }
}
