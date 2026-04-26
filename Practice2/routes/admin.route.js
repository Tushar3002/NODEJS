import express from "express";
import Order from "../models/Order.model.js";
import User from "../models/User.model.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";

const adminRouter = express.Router();

// Admin middleware
const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

adminRouter.get("/dashboard", verifyToken, isAdmin, async (req, res) => {
  try {
    const totalOrders = await Order.count();

    const orders = await Order.findAll();

    const totalRevenue = orders.reduce(
      (sum, order) => sum + order.totalPrice,
      0
    );

    const totalUsers = await User.count();

    res.json({
      totalOrders,
      totalRevenue,
      totalUsers,
    });
  } catch (err) {
    console.error("DASHBOARD ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default adminRouter;