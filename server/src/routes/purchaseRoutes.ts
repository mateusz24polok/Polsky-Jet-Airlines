import express from "express";
import { postFlightPurchase } from "../controllers/purchaseControllers";

export const purchaseRouter = express.Router();

purchaseRouter.route("/flight/:id").post(postFlightPurchase);
