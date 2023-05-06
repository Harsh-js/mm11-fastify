import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { rank_categories, rank_categoriesId } from './rank_categories';

export interface ranksAttributes {
  id: number;
  rank_category_id: number;
  rank: string;
  from: number;
  to: number;
  percentage: number;
  created_at?: Date;
  updated_at?: Date;
}

export type ranksPk = "id";
export type ranksId = ranks[ranksPk];
export type ranksOptionalAttributes = "id" | "created_at" | "updated_at";
export type ranksCreationAttributes = Optional<ranksAttributes, ranksOptionalAttributes>;

export class ranks extends Model<ranksAttributes, ranksCreationAttributes> implements ranksAttributes {
  id!: number;
  rank_category_id!: number;
  rank!: string;
  from!: number;
  to!: number;
  percentage!: number;
  created_at?: Date;
  updated_at?: Date;

  // ranks belongsTo rank_categories via rank_category_id
  rank_category!: rank_categories;
  getRank_category!: Sequelize.BelongsToGetAssociationMixin<rank_categories>;
  setRank_category!: Sequelize.BelongsToSetAssociationMixin<rank_categories, rank_categoriesId>;
  createRank_category!: Sequelize.BelongsToCreateAssociationMixin<rank_categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ranks {
    return sequelize.define('ranks', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    rank_category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'rank_categories',
        key: 'id'
      }
    },
    rank: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    from: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    to: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    percentage: {
      type: DataTypes.DOUBLE(8,2),
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
    tableName: 'ranks',
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
        name: "ranks_rank_category_id_foreign",
        using: "BTREE",
        fields: [
          { name: "rank_category_id" },
        ]
      },
    ]
  }) as typeof ranks;
  }
}
