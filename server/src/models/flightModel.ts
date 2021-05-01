import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["OPEN", "CANCELLED", "CLOSED"],
    required: true,
  },
  startingAirport: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Airport",
  },
  destinationAirport: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Airport",
  },
  startingDate: {
    type: Date,
    required: true,
  },
  tickets: [
    {
      status: {
        type: String,
        enum: ["OPEN", "CLOSED", "BLOCKED", "WITHDRAWN"],
        required: true,
      },
      price: {
        value: { type: Number, required: true, min: 0 },
        currency: { type: String, required: true, enum: ["PLN", "EUR", "USD"] },
      },
      class: {
        type: String,
        required: true,
        enum: ["ECONOMY", "STANDARD", "PREMIUM"],
      },
      airplanePosition: {
        type: String,
        required: true,
      },
    },
  ],
  estimatedFlightTime: {
    type: Number,
    required: true,
  },
});

export const Flight = mongoose.model("Flight", flightSchema);
