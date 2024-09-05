import { Router } from "express";
import { checkJwt } from "../middleware/session";
import { routerAuth } from "./auth/auth";
import { productRouter } from './product/product';

const router = Router()

router.use('/auth', routerAuth)
router.use('/api/v1/product', productRouter)
router.use('/api/v2/product', checkJwt, productRouter)

export { router };
