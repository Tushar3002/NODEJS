import { Router } from "express";
import { createOrder, getOrder } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const OrderRouter = Router();

OrderRouter.post("/", verifyToken, createOrder);

OrderRouter.get("/",verifyToken,getOrder)

export default OrderRouter;