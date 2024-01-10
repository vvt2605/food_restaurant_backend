import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Customer extends Model {}

Customer.init({
    customerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    customerPhone: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    customerAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
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
    modelName: 'Customer',
    tableName: 'Customers'
});

export default Customer;

