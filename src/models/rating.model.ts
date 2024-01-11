import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

class Rating extends Model { }

Rating.init(
    {
        customerID: {
            type: DataTypes.INTEGER,
           
        },
        food: {
            type: DataTypes.INTEGER
        },
        point: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        modelName: 'Rating',
        tableName: 'Ratings',
    }
);

export default Rating;
