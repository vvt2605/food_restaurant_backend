
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './user.model';

class Table extends Model {}

Table.init({
    tableID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    capacity: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    timestamps: true,
    modelName: 'Table',
    tableName: 'Tables'
});


export default Table;
