import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../../controllers/product";
import { logMiddleware } from "../../middleware/log";
import { validateProduct } from "../../validators/product.validator";

const productRouter = Router()

productRouter.get('/', logMiddleware, getAllProducts)
productRouter.get('/:id', getOneProduct)
productRouter.post('/', validateProduct, createProduct)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export { productRouter };
