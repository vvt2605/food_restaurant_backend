import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Account extends Model {
  // Định nghĩa các trường của mô hình
  public accountID!: number;
  public name!: string;
  public phone!: string;
  public address!: string;
  public username!: string;
  public password!: string;
  public role!: 'admin' | 'user';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Account.init({
  accountID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  phone: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
    defaultValue: 'user' 
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'Account',
  tableName: 'Accounts',
});

export default Account;
