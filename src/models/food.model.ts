import { Sequelize, DataTypes, Model } from 'sequelize';

import sequelize from '../config/db';

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
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Food',
    tableName: 'Foods'
  }
);

export default Food;
