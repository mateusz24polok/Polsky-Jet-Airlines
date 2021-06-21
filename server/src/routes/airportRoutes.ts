import express from "express";
import {
  createAirports,
  getAirports,
  uploadAirportPhoto,
} from "../controllers/airportsControllers";
import { protect } from "../controllers/authControllers";

export const airportsRouter = express.Router();

airportsRouter
  .route("/")
  .get(getAirports)
  .post(uploadAirportPhoto, protect, createAirports);
