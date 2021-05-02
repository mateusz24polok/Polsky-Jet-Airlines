import express from "express";
import { createFlight, getFlights } from "../controllers/flightControllers";

export const flightRouter = express.Router();

flightRouter.get("/", getFlights).post("/", createFlight);
