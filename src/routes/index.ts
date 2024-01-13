import express from 'express';
import homeRouter from './home.route'
import customerRouter from './customer.route';
import foodRouter from './food.route';
import accountRouter from './account.route';
const router = express.Router(); 

router.use('/home', homeRouter);
router.use('/customer', customerRouter);
router.use('/food',foodRouter )
router.use('/account',accountRouter )
export default router;