import express from "express";
import {
  createAirports,
  getAirports,
  uploadAirportPhoto,
} from "../controllers/airportsControllers";

export const airportsRouter = express.Router();

airportsRouter
  .route("/")
  .get(getAirports)
  .post(uploadAirportPhoto, createAirports);
