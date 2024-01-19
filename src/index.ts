import cors from 'cors';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './routes';
const app = express();
import sequelize from './config/db';
const port = process.env.PORT || 3000;
app.use(cookieParser());

app.use(
  cors({
      origin: true,
      credentials: true,      
  })
);

sequelize.sync()
    .then(() => {
     console.log('Database synced successfully');
    // Start your application here
  })
  .catch((error: any) => {
    console.error('Error syncing database:', error);
  });
// Parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Đăng ký các routes
app.use('/', router); 

// Đoạn này có thể bổ sung các middleware, middleware error handling, ...

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
