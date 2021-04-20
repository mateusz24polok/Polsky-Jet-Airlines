import express from "express";
import { getAirports } from "../controllers/airportsControllers";

export const airportsRouter = express.Router();

airportsRouter.route("/").get(getAirports);
