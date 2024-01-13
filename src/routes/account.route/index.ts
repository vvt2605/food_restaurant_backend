import { Router } from "express";
import { accountController } from "../../controllers/account.controller";
const accountRouter = Router();

accountRouter.get('/', accountController.getAllAccount);
// accountRouter.get('/find', accountController.);
accountRouter.post('/register', accountController.registerAccount);
export default accountRouter;