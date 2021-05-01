import express from "express";
import { createAirports, getAirports } from "../controllers/airportsControllers";

export const airportsRouter = express.Router();

airportsRouter.route("/").get(getAirports).post(createAirports);
