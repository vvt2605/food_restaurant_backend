import { Router } from "express";
import { foodController } from "../../controllers/food.controller";
const foodRouter = Router();

foodRouter.get('/', foodController.getAllFoods);
foodRouter.post('/search',foodController.foodByName)
foodRouter.post('/register', foodController.registerFood);
foodRouter.put('/update/:id', foodController.updateFood);
foodRouter.delete('/delete/:id', foodController.deleteFood);


export default foodRouter;