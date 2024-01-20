import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './user.model';
import Account from './account.model';
import OrderItem from './orderItems.model';
import Table from './table.model';
import Food from './food.model';

export enum Status {
    PAID = 'paid',
    UNPAID = 'unpaid',
    COMPLETED = 'completed',
    PENDING = 'pending'
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
    type: DataTypes.STRING,
    defaultValue: Status.PENDING
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

// Define associations
Account.hasMany(Order, { foreignKey: 'accountID' });
Order.belongsTo(Account, { foreignKey: 'accountID' });

Order.hasMany(OrderItem, { foreignKey: 'orderID' });
OrderItem.belongsTo(Order, { foreignKey: 'orderID' });

Table.hasMany(Order, { foreignKey: 'tableID' });
Order.belongsTo(Table, { foreignKey: 'tableID' });

Order.hasMany(OrderItem, { foreignKey: 'orderID' });
OrderItem.belongsTo(Order, { foreignKey: 'orderID' });

Food.hasMany(OrderItem, { foreignKey: 'foodID' });
OrderItem.belongsTo(Food, { foreignKey: 'foodID' });

export default Order;
