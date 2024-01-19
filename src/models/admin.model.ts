
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import Account from './account.model';

class Admin extends Model { }

Admin.init({
    adminID: {
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
    modelName: 'Admin',
    tableName: 'Admins'
});
Admin.belongsTo(Account, { foreignKey: 'accountID' });

export default Admin;

