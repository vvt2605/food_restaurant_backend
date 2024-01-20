import { Router } from "express";
import { accountController } from "../../controllers/account.controller";
import { isAuthenticated } from "../../middlewares/authMiddlewares";
import { isAdmin } from "../../middlewares/isAdmin";
const accountRouter = Router();


accountRouter.get('/allAccounts',isAuthenticated,isAdmin, accountController.getAllAccount);
accountRouter.put('/update/:id',isAuthenticated, accountController.updateAccount);
accountRouter.post('/register', accountController.registerAccount);
accountRouter.delete('/delete/:id',isAuthenticated,isAdmin, accountController.deleteAccount);

export default accountRouter;