import mongoose from "mongoose";

const airportSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    enum: [
      "Europe",
      "North America",
      "South America",
      "Asia",
      "Australia",
      "Africa",
    ],
  },
  airport: {
    type: String,
    required: true,
    unique: true,
  },
  airportKey: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
  },
  terminals: {
    type: [String],
    required: true,
  },
  startingPoint: {
    type: Boolean,
    required: true,
    default: false,
  },
  destinationPoint: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export const Airport = mongoose.model("Airport", airportSchema);
