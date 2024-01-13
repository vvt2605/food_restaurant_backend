
import * as dotenv from 'dotenv';
dotenv.config(); 
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food_restaurant', 'root', 'thanhvo2003hagl', {
  // server: '127.0.0.1',
  server: '127.0.0.1',
  dialect: 'mssql',
  port: 51912, // Default port for SQL Server
  define: {
    timestamps: false, // Optionally, set to false if you don't want timestamps in your models
  },
});
// Function to test database connection
async function testDBConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Test the database connection
testDBConnection();
export default sequelize;
