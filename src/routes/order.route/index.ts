import { Router } from "express";
import { orderController } from "../../controllers/order.controller"; const customerRouter = Router();
const orderRouter = Router();
orderRouter.post('/register', orderController.createOrder);

export default orderRouter;