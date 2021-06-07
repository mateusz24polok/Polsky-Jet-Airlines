import express from "express";
import { signup } from "../controllers/authControllers";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
