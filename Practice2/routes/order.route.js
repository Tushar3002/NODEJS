import { Router } from "express";
import { createOrder, getOrder } from "../controllers/order.controller.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { getAllOrders, updateOrderStatus } from "../controllers/admin.controller.js";

const OrderRouter = Router();

OrderRouter.post("/", verifyToken, createOrder);

OrderRouter.get("/",verifyToken,getOrder)


OrderRouter.get("/admin", verifyToken, isAdmin, getAllOrders);
OrderRouter.put("/:id/status", verifyToken, isAdmin, updateOrderStatus);
export default OrderRouter;