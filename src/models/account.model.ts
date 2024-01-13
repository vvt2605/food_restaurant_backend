import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Account extends Model {}

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
    modelName: 'Account',
    tableName: 'Accounts'
});

export default Account ;

