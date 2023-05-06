import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bkb_contests, bkb_contestsId } from './bkb_contests';
import type { bsb_contests, bsb_contestsId } from './bsb_contests';
import type { contests, contestsId } from './contests';
import type { ftb_contests, ftb_contestsId } from './ftb_contests';
import type { hky_contests, hky_contestsId } from './hky_contests';
import type { kbd_contests, kbd_contestsId } from './kbd_contests';

export interface contest_categoriesAttributes {
  id: string;
  name: string;
  tagline: string;
  sports_type: 'CRICKET' | 'FOOTBALL' | 'KABADDI' | 'BASKETBALL' | 'BASEBALL' | 'HOCKEY';
  is_active: number;
  is_mini: number;
  sequence_by?: number;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type contest_categoriesPk = "id";
export type contest_categoriesId = contest_categories[contest_categoriesPk];
export type contest_categoriesOptionalAttributes = "is_active" | "is_mini" | "sequence_by" | "image" | "created_at" | "updated_at";
export type contest_categoriesCreationAttributes = Optional<contest_categoriesAttributes, contest_categoriesOptionalAttributes>;

export class contest_categories extends Model<contest_categoriesAttributes, contest_categoriesCreationAttributes> implements contest_categoriesAttributes {
  id!: string;
  name!: string;
  tagline!: string;
  sports_type!: 'CRICKET' | 'FOOTBALL' | 'KABADDI' | 'BASKETBALL' | 'BASEBALL' | 'HOCKEY';
  is_active!: number;
  is_mini!: number;
  sequence_by?: number;
  image?: string;
  created_at?: Date;
  updated_at?: Date;

  // contest_categories hasMany bkb_contests via contest_category_id
  bkb_contests!: bkb_contests[];
  getBkb_contests!: Sequelize.HasManyGetAssociationsMixin<bkb_contests>;
  setBkb_contests!: Sequelize.HasManySetAssociationsMixin<bkb_contests, bkb_contestsId>;
  addBkb_contest!: Sequelize.HasManyAddAssociationMixin<bkb_contests, bkb_contestsId>;
  addBkb_contests!: Sequelize.HasManyAddAssociationsMixin<bkb_contests, bkb_contestsId>;
  createBkb_contest!: Sequelize.HasManyCreateAssociationMixin<bkb_contests>;
  removeBkb_contest!: Sequelize.HasManyRemoveAssociationMixin<bkb_contests, bkb_contestsId>;
  removeBkb_contests!: Sequelize.HasManyRemoveAssociationsMixin<bkb_contests, bkb_contestsId>;
  hasBkb_contest!: Sequelize.HasManyHasAssociationMixin<bkb_contests, bkb_contestsId>;
  hasBkb_contests!: Sequelize.HasManyHasAssociationsMixin<bkb_contests, bkb_contestsId>;
  countBkb_contests!: Sequelize.HasManyCountAssociationsMixin;
  // contest_categories hasMany bsb_contests via contest_category_id
  bsb_contests!: bsb_contests[];
  getBsb_contests!: Sequelize.HasManyGetAssociationsMixin<bsb_contests>;
  setBsb_contests!: Sequelize.HasManySetAssociationsMixin<bsb_contests, bsb_contestsId>;
  addBsb_contest!: Sequelize.HasManyAddAssociationMixin<bsb_contests, bsb_contestsId>;
  addBsb_contests!: Sequelize.HasManyAddAssociationsMixin<bsb_contests, bsb_contestsId>;
  createBsb_contest!: Sequelize.HasManyCreateAssociationMixin<bsb_contests>;
  removeBsb_contest!: Sequelize.HasManyRemoveAssociationMixin<bsb_contests, bsb_contestsId>;
  removeBsb_contests!: Sequelize.HasManyRemoveAssociationsMixin<bsb_contests, bsb_contestsId>;
  hasBsb_contest!: Sequelize.HasManyHasAssociationMixin<bsb_contests, bsb_contestsId>;
  hasBsb_contests!: Sequelize.HasManyHasAssociationsMixin<bsb_contests, bsb_contestsId>;
  countBsb_contests!: Sequelize.HasManyCountAssociationsMixin;
  // contest_categories hasMany contests via contest_category_id
  contests!: contests[];
  getContests!: Sequelize.HasManyGetAssociationsMixin<contests>;
  setContests!: Sequelize.HasManySetAssociationsMixin<contests, contestsId>;
  addContest!: Sequelize.HasManyAddAssociationMixin<contests, contestsId>;
  addContests!: Sequelize.HasManyAddAssociationsMixin<contests, contestsId>;
  createContest!: Sequelize.HasManyCreateAssociationMixin<contests>;
  removeContest!: Sequelize.HasManyRemoveAssociationMixin<contests, contestsId>;
  removeContests!: Sequelize.HasManyRemoveAssociationsMixin<contests, contestsId>;
  hasContest!: Sequelize.HasManyHasAssociationMixin<contests, contestsId>;
  hasContests!: Sequelize.HasManyHasAssociationsMixin<contests, contestsId>;
  countContests!: Sequelize.HasManyCountAssociationsMixin;
  // contest_categories hasMany ftb_contests via contest_category_id
  ftb_contests!: ftb_contests[];
  getFtb_contests!: Sequelize.HasManyGetAssociationsMixin<ftb_contests>;
  setFtb_contests!: Sequelize.HasManySetAssociationsMixin<ftb_contests, ftb_contestsId>;
  addFtb_contest!: Sequelize.HasManyAddAssociationMixin<ftb_contests, ftb_contestsId>;
  addFtb_contests!: Sequelize.HasManyAddAssociationsMixin<ftb_contests, ftb_contestsId>;
  createFtb_contest!: Sequelize.HasManyCreateAssociationMixin<ftb_contests>;
  removeFtb_contest!: Sequelize.HasManyRemoveAssociationMixin<ftb_contests, ftb_contestsId>;
  removeFtb_contests!: Sequelize.HasManyRemoveAssociationsMixin<ftb_contests, ftb_contestsId>;
  hasFtb_contest!: Sequelize.HasManyHasAssociationMixin<ftb_contests, ftb_contestsId>;
  hasFtb_contests!: Sequelize.HasManyHasAssociationsMixin<ftb_contests, ftb_contestsId>;
  countFtb_contests!: Sequelize.HasManyCountAssociationsMixin;
  // contest_categories hasMany hky_contests via contest_category_id
  hky_contests!: hky_contests[];
  getHky_contests!: Sequelize.HasManyGetAssociationsMixin<hky_contests>;
  setHky_contests!: Sequelize.HasManySetAssociationsMixin<hky_contests, hky_contestsId>;
  addHky_contest!: Sequelize.HasManyAddAssociationMixin<hky_contests, hky_contestsId>;
  addHky_contests!: Sequelize.HasManyAddAssociationsMixin<hky_contests, hky_contestsId>;
  createHky_contest!: Sequelize.HasManyCreateAssociationMixin<hky_contests>;
  removeHky_contest!: Sequelize.HasManyRemoveAssociationMixin<hky_contests, hky_contestsId>;
  removeHky_contests!: Sequelize.HasManyRemoveAssociationsMixin<hky_contests, hky_contestsId>;
  hasHky_contest!: Sequelize.HasManyHasAssociationMixin<hky_contests, hky_contestsId>;
  hasHky_contests!: Sequelize.HasManyHasAssociationsMixin<hky_contests, hky_contestsId>;
  countHky_contests!: Sequelize.HasManyCountAssociationsMixin;
  // contest_categories hasMany kbd_contests via contest_category_id
  kbd_contests!: kbd_contests[];
  getKbd_contests!: Sequelize.HasManyGetAssociationsMixin<kbd_contests>;
  setKbd_contests!: Sequelize.HasManySetAssociationsMixin<kbd_contests, kbd_contestsId>;
  addKbd_contest!: Sequelize.HasManyAddAssociationMixin<kbd_contests, kbd_contestsId>;
  addKbd_contests!: Sequelize.HasManyAddAssociationsMixin<kbd_contests, kbd_contestsId>;
  createKbd_contest!: Sequelize.HasManyCreateAssociationMixin<kbd_contests>;
  removeKbd_contest!: Sequelize.HasManyRemoveAssociationMixin<kbd_contests, kbd_contestsId>;
  removeKbd_contests!: Sequelize.HasManyRemoveAssociationsMixin<kbd_contests, kbd_contestsId>;
  hasKbd_contest!: Sequelize.HasManyHasAssociationMixin<kbd_contests, kbd_contestsId>;
  hasKbd_contests!: Sequelize.HasManyHasAssociationsMixin<kbd_contests, kbd_contestsId>;
  countKbd_contests!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof contest_categories {
    return sequelize.define('contest_categories', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tagline: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sports_type: {
      type: DataTypes.ENUM('CRICKET','FOOTBALL','KABADDI','BASKETBALL','BASEBALL','HOCKEY'),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_mini: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sequence_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'contest_categories',
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
        name: "tagline",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tagline" },
          { name: "sports_type" },
        ]
      },
    ]
  }) as typeof contest_categories;
  }
}
