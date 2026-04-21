import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.controller.js";

import { verifyToken, isAdmin } from "../middleware/auth.middleware.js";

const productRouter = Router();

//public routes
productRouter.get("/", getAllProduct);
productRouter.get("/:id", getSingleProduct);

//admin routes
productRouter.post("/", verifyToken, isAdmin, createProduct);
productRouter.put("/:id", verifyToken, isAdmin, updateProduct);
productRouter.delete("/:id", verifyToken, isAdmin, deleteProduct);

export default productRouter;