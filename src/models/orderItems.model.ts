// order.model.ts

import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './user.model';

class OrderItem extends Model {}

OrderItem.init({
    OrderItemID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    subtotal: {
        type: DataTypes.FLOAT,
        defaultValue: 0.1
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'OrderItem',
    tableName: 'OrderItems'
});


export default OrderItem;
