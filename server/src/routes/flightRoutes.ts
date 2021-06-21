import express from "express";
import { createFlight, getFlights } from "../controllers/flightControllers";
import { protect, restrictTo } from "../controllers/authControllers";
import { Role } from "../models/userModel";

export const flightRouter = express.Router();

flightRouter
  .route("/")
  .get(getFlights)
  .post(protect, restrictTo(Role.ADMIN), createFlight);
