import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface payments_copy2Attributes {
  id: number;
  user_id: string;
  amount: number;
  status: string;
  transaction_id: string;
  description: string;
  type: 'DEPOSIT' | 'WITHDRAW' | 'CONTEST JOIN' | 'CONTEST WON' | 'REFUND' | 'ADMIN ADDED' | 'ADMIN DEDUCT' | 'PROMOTER ADD' | 'PROMOTER UPDATE' | 'COUPON' | 'PROMOTER COMMISSION' | 'LEVEL BONUS' | 'BONUS' | 'REDEEM POINT' | 'INFLUENCER COMMISSION';
  contest_id?: string;
  ftb_contest_id?: string;
  kbd_contest_id?: string;
  private_contest_id?: string;
  ftb_private_contest_id?: string;
  kbd_private_contest_id?: string;
  reference_id?: string;
  payment_gateway?: 'CASHFREE' | 'EASEBUZZ';
  extra?: object;
  payment_at: Date;
  coupon_id?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type payments_copy2Pk = "id";
export type payments_copy2Id = payments_copy2[payments_copy2Pk];
export type payments_copy2OptionalAttributes = "id" | "contest_id" | "ftb_contest_id" | "kbd_contest_id" | "private_contest_id" | "ftb_private_contest_id" | "kbd_private_contest_id" | "reference_id" | "payment_gateway" | "extra" | "payment_at" | "coupon_id" | "created_at" | "updated_at";
export type payments_copy2CreationAttributes = Optional<payments_copy2Attributes, payments_copy2OptionalAttributes>;

export class payments_copy2 extends Model<payments_copy2Attributes, payments_copy2CreationAttributes> implements payments_copy2Attributes {
  id!: number;
  user_id!: string;
  amount!: number;
  status!: string;
  transaction_id!: string;
  description!: string;
  type!: 'DEPOSIT' | 'WITHDRAW' | 'CONTEST JOIN' | 'CONTEST WON' | 'REFUND' | 'ADMIN ADDED' | 'ADMIN DEDUCT' | 'PROMOTER ADD' | 'PROMOTER UPDATE' | 'COUPON' | 'PROMOTER COMMISSION' | 'LEVEL BONUS' | 'BONUS' | 'REDEEM POINT' | 'INFLUENCER COMMISSION';
  contest_id?: string;
  ftb_contest_id?: string;
  kbd_contest_id?: string;
  private_contest_id?: string;
  ftb_private_contest_id?: string;
  kbd_private_contest_id?: string;
  reference_id?: string;
  payment_gateway?: 'CASHFREE' | 'EASEBUZZ';
  extra?: object;
  payment_at!: Date;
  coupon_id?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof payments_copy2 {
    return sequelize.define('payments_copy2', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('DEPOSIT','WITHDRAW','CONTEST JOIN','CONTEST WON','REFUND','ADMIN ADDED','ADMIN DEDUCT','PROMOTER ADD','PROMOTER UPDATE','COUPON','PROMOTER COMMISSION','LEVEL BONUS','BONUS','REDEEM POINT','INFLUENCER COMMISSION'),
      allowNull: false
    },
    contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    ftb_contest_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    kbd_contest_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    private_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    ftb_private_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    kbd_private_contest_id: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    reference_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "payments_reference_id_unique"
    },
    payment_gateway: {
      type: DataTypes.ENUM('CASHFREE','EASEBUZZ'),
      allowNull: true
    },
    extra: {
      type: DataTypes.JSON,
      allowNull: true
    },
    payment_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    coupon_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
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
    tableName: 'payments_copy2',
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
        name: "payments_reference_id_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reference_id" },
        ]
      },
      {
        name: "payments_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "payments_contest_id_foreign",
        using: "BTREE",
        fields: [
          { name: "contest_id" },
        ]
      },
      {
        name: "payments_private_contest_id_foreign",
        using: "BTREE",
        fields: [
          { name: "private_contest_id" },
        ]
      },
      {
        name: "transaction_id_1",
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
        ]
      },
    ]
  }) as typeof payments_copy2;
  }
}
