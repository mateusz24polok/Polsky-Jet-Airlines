import express from "express";
import { postFlightPurchase } from "../controllers/purchaseControllers";
import { protect } from "../controllers/authControllers";

export const purchaseRouter = express.Router();

purchaseRouter.route("/flight/:id").post(protect, postFlightPurchase);
