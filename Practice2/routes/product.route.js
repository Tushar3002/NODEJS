import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controllers/product.controller.js";


const productRouter=Router()

productRouter.post('/',createProduct);
productRouter.get('/',getAllProduct);
productRouter.get('/:id',getSingleProduct);
productRouter.put('/:id',updateProduct);
productRouter.delete('/:id',deleteProduct);

export default productRouter