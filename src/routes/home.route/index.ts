import { Router } from "express";
import { homeController } from "../../controllers";
const homeRouter = Router();

homeRouter.get('/', homeController.getHome);

export default homeRouter;