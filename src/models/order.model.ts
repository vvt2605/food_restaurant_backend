import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

class Order extends Model { }

Order.init(
    {
        orderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        foodQuantityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shipperID: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'pending', 
        },
    },
    {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
    }
);

export default Order;
