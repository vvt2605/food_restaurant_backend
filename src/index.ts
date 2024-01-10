import cors from 'cors';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import router from './routes';
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
      origin: true,
      credentials: true,      
  })
);

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
