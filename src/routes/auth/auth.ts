import { Router } from "express";
import { loginController, registerController } from "../../controllers/auth";

const routerAuth = Router()

routerAuth.post('/register', registerController)
routerAuth.post('/login', loginController)

export { routerAuth };
