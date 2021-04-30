import mongoose from "mongoose";

const airportSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  airport: {
    type: String,
    required: true,
  },
  terminals: {
    type: [String],
    required: true,
  },
});

export const airportModel = mongoose.model("Airport", airportSchema);
