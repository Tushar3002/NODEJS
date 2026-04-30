import express from "express";
import Order from "../models/Order.model.js";
import User from "../models/User.model.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";
import { adminDashboard, deleteUser, getAllUsersDetails, updateRole } from "../controllers/admin.controller.js";

const adminRouter = express.Router();



adminRouter.get("/dashboard", verifyToken, isAdmin, adminDashboard);

adminRouter.get("/allUsers",getAllUsersDetails)

adminRouter.delete("/deleteUser/:id",verifyToken,isAdmin,deleteUser)

adminRouter.put("/updateUser/:id",updateRole)

export default adminRouter;