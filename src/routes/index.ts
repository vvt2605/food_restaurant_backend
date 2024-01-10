import express from 'express';
import homeRouter from './home.route'
import customerRouter from './customer.route';
const router = express.Router(); 

router.use('/home', homeRouter);
router.use('/customer', customerRouter);
export default router;