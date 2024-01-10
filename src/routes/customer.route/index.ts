import { Router } from "express";
import { customerController } from "../../controllers/customer.controller";
const customerRouter = Router();

customerRouter.get('/', customerController.getAllCustomers);

export default customerRouter;