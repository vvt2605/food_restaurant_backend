import { Sequelize, DataTypes, Model } from 'sequelize';
import Account from './account.model';
import sequelize from '../config/db';



class Customer extends Model {}

Customer.init({
    customerID: {
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
        type: DataTypes.STRING,
        defaultValue: 'user' 
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'Customer',
    tableName: 'Customers'
});
// (async () => {
//     await Customer.sync({ alter: true});
//   })();
export default Customer;

