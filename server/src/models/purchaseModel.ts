import mongoose, { Document, Model, Schema } from "mongoose";
import { IFlight } from "./flightModel";
import { IUser } from "./userModel";

enum purchaseType {
  EUROPE = "FLIGHT",
  CAR = "CAR",
  HOTEL = "HOTEL",
}

export interface IPurchase {
  purchaseType: purchaseType;
  flight: IFlight;
  confirmPurchase: boolean;
  weatherInfoAccept: boolean;
  orderingUser: IUser;
  purchasedTickets: {
    economy: number;
    standard: number;
    premium: number;
  };
}

export interface PurchaseBaseDocument extends IPurchase, Document {}

export const purchaseSchema = new Schema({
  purchaseType: {
    type: String,
    enum: ["FLIGHT", "CAR", "HOTEL"],
    required: true,
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Flight",
  },
  confirmPurchase: {
    type: Boolean,
    required: true,
    validate: {
      validator: function (val: Boolean): Boolean {
        return val === true;
      },
      message: "Purchase has to be confirmed",
    },
  },
  weatherInfoAccept: {
    type: Boolean,
    required: true,
    validate: {
      validator: function (val: Boolean): Boolean {
        return val === true;
      },
      message: "Flight weather conditions has to be confirmed",
    },
  },
  orderingUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  purchasedTickets: {
    type: {
      economy: Number,
      standard: Number,
      premium: Number,
    },
    required: true,
  },
});

export const Purchase = mongoose.model<
  PurchaseBaseDocument,
  Model<PurchaseBaseDocument>
>("Purchase", purchaseSchema);
