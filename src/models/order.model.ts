import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './user.model';

export enum Status {
    PAID = 'paid',
    UNPAID = 'unpaid',
    COMPLETED = 'completed',
}
export enum TypeOrder {
    ONLINE = 'online',
    OFFLINE = 'offline'
}
class Order extends Model {

}

Order.init({
  orderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: DataTypes.STRING
  },
  typeOrder: {
    type: DataTypes.STRING,
    defaultValue: 'offline'
  }

}, {
  sequelize,
  timestamps: true,
  modelName: 'Order',
  tableName: 'Orders',
});


export default Order;
