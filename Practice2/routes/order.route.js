import { Router } from "express";
import { createOrder } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const OrderRouter = Router();

OrderRouter.post("/", verifyToken, createOrder);

export default OrderRouter;