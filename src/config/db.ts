import * as dotenv from 'dotenv';
import mysql, { Pool } from 'mysql2/promise';

dotenv.config(); // Load environment variables from .env file

const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  database: process.env.DB_DATABASE || 'food_restaurant',
  password: process.env.DB_PASSWORD || 'thanhvo2003hagl',
});



export default pool;
