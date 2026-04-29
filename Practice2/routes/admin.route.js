import express from "express";
import Order from "../models/Order.model.js";
import User from "../models/User.model.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { adminDashboard, getAllUsersDetails } from "../controllers/admin.controller.js";

const adminRouter = express.Router();



adminRouter.get("/dashboard", verifyToken, isAdmin, adminDashboard);

adminRouter.get("/allUsers",getAllUsersDetails)

export default adminRouter;