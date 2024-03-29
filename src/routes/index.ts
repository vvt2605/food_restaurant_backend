import express from 'express';
import homeRouter from './home.route'
import customerRouter from './customer.route';
import foodRouter from './food.route';
import accountRouter from './account.route';
import authRouter from './auth.route';
import orderRouter from './order.route';
const router = express.Router(); 

router.use('/home', homeRouter);
router.use('/customer', customerRouter);
router.use('/food',foodRouter )
router.use('/account',accountRouter )
router.use('/auth',authRouter )
router.use('/order',orderRouter )

export default router;