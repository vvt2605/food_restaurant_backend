import { Router } from "express";
import { customerController } from "../../controllers/customer.controller";
const customerRouter = Router();

customerRouter.get('/', customerController.getAllCustomers);
customerRouter.post('/register', customerController.registerCustomer);
export default customerRouter;