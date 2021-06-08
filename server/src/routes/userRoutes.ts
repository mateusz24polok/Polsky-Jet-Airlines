import express from "express";
import { login, signup } from "../controllers/authControllers";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
