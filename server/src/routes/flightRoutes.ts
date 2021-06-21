import express from "express";
import { createFlight, getFlights } from "../controllers/flightControllers";
import { protect } from "../controllers/authControllers";

export const flightRouter = express.Router();

flightRouter.route("/").get(getFlights).post(protect, createFlight);
