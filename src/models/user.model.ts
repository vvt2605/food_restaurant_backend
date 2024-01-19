import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import Account from './account.model';
import Order from './order.model';
export enum Role {
    ADMIN = 'admin',
    USER = 'user'
}
class User extends Model {}

User.init({
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'User',
    tableName: 'Users'
});

// Establishing associations
User.belongsTo(Account, { foreignKey: 'accountID' });
User.hasMany(Order, { foreignKey: 'userID' });
Order.belongsTo(User, {foreignKey: 'userID'})
export default User;
