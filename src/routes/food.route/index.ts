import { Router } from "express";
import { foodController } from "../../controllers/food.controller";
const foodRouter = Router();

foodRouter.get('/', foodController.getAllFoods);
foodRouter.post('/register', foodController.registerFood);
export default foodRouter;