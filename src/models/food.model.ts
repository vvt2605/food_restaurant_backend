import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

class Food extends Model {}

Food.init(
  {
    foodID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.BLOB
    }
  },
  {
    sequelize,
    modelName: 'Food',
    tableName: 'Foods'
  }
);

export default Food;
