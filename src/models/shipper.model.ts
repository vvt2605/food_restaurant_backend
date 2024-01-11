import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

class Shipper extends Model { }

Shipper.init(
    {
        shipperID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'Shipper',
        tableName: 'Shippers',
    }
);

export default Shipper;
