import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
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
    unique: true,
  },
});

export const Ticket = mongoose.model("Ticket", ticketSchema);
