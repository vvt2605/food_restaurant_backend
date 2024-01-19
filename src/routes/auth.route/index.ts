import { Router } from "express";
import { authController } from "../../controllers/auth.controller";
import { auth } from "google-auth-library";
import { isAuthenticated } from "../../middlewares/authMiddlewares";
const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/logout',isAuthenticated, authController.logout);
// authRouter.get('/find', accountController.);
authRouter.post('/register', authController.register);
export default authRouter;