import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { competitions, competitionsId } from './competitions';

export interface leaderboard_weeksAttributes {
  id: number;
  competition_id?: number;
  competition_name?: string;
  start_week?: string;
  end_week?: string;
  days?: number;
  prize_breakup: object;
  created_at: Date;
  updated_at: Date;
}

export type leaderboard_weeksPk = "id";
export type leaderboard_weeksId = leaderboard_weeks[leaderboard_weeksPk];
export type leaderboard_weeksOptionalAttributes = "id" | "competition_id" | "competition_name" | "start_week" | "end_week" | "days";
export type leaderboard_weeksCreationAttributes = Optional<leaderboard_weeksAttributes, leaderboard_weeksOptionalAttributes>;

export class leaderboard_weeks extends Model<leaderboard_weeksAttributes, leaderboard_weeksCreationAttributes> implements leaderboard_weeksAttributes {
  id!: number;
  competition_id?: number;
  competition_name?: string;
  start_week?: string;
  end_week?: string;
  days?: number;
  prize_breakup!: object;
  created_at!: Date;
  updated_at!: Date;

  // leaderboard_weeks belongsTo competitions via competition_id
  competition!: competitions;
  getCompetition!: Sequelize.BelongsToGetAssociationMixin<competitions>;
  setCompetition!: Sequelize.BelongsToSetAssociationMixin<competitions, competitionsId>;
  createCompetition!: Sequelize.BelongsToCreateAssociationMixin<competitions>;

  static initModel(sequelize: Sequelize.Sequelize): typeof leaderboard_weeks {
    return sequelize.define('leaderboard_weeks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    competition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'competitions',
        key: 'id'
      }
    },
    competition_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_week: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_week: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prize_breakup: {
      type: DataTypes.JSON,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'leaderboard_weeks',
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
        name: "competition_id",
        using: "BTREE",
        fields: [
          { name: "competition_id" },
        ]
      },
    ]
  }) as typeof leaderboard_weeks;
  }
}
