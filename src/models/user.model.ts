
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import Account from './account.model';

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
    modelName: 'User',
    tableName: 'Users'
});
User.belongsTo(Account, { foreignKey: 'accountID' });
export default User ;

