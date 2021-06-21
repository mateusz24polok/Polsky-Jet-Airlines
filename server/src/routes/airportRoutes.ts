import express from "express";
import {
  createAirports,
  getAirports,
  uploadAirportPhoto,
} from "../controllers/airportsControllers";
import { protect, restrictTo } from "../controllers/authControllers";
import { Role } from "../models/userModel";

export const airportsRouter = express.Router();

airportsRouter
  .route("/")
  .get(getAirports)
  .post(uploadAirportPhoto, protect, restrictTo(Role.ADMIN), createAirports);
