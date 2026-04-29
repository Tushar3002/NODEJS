import express from "express";
import { register, login, getCurrentUser } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validations.middleware.js";
import { loginValidation, registerValidation } from "../validations/auth.validation.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register",validate(registerValidation), register);
authRouter.post("/login",validate(loginValidation), login);

authRouter.get("/me", verifyToken, getCurrentUser);



export default authRouter;