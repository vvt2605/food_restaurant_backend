import { Router } from "express";
import { homeController } from "../../controllers/home.controller";
const homeRouter = Router();

homeRouter.get('/', homeController.getHome);

export default homeRouter;