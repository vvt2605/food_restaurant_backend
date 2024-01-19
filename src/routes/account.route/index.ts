import { Router } from "express";
import { accountController } from "../../controllers/account.controller";
import { isAuthenticated } from "../../middlewares/authMiddlewares";
import { isAdmin } from "../../middlewares/isAdmin";
const accountRouter = Router();

accountRouter.get('/allAccounts',isAuthenticated,isAdmin, accountController.getAllAccount);
// accountRouter.get('/find', accountController.);
accountRouter.post('/register', accountController.registerAccount);
export default accountRouter;