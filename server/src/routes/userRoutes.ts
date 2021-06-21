import express from "express";
import { login, logout, protect, signup } from "../controllers/authControllers";
import { getUser } from "../controllers/userControllers";

export const userRouter = express.Router();

//Auth routes
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/logout", logout);

//User Routes
userRouter.get("/:id", protect, getUser);
