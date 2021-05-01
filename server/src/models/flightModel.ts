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
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Ticket",
    },
  ],
  estimatedFlightTime: {
    type: Number,
    required: true,
  },
});

export const Flight = mongoose.model("Flight", flightSchema);
