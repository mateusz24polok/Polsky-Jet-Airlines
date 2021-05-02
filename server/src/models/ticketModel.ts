import mongoose, { Model, Document, Schema } from "mongoose";

const ticketSchema: Schema = new Schema({
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
    unique: true,
  },
});

enum Currency {
  PLN = "PLN",
  EUR = "EUR",
  USD = "USD",
}
interface Money {
  value: number;
  currency: Currency;
}

enum TicketStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  BLOCKED = "BLOCKED",
  WITHDRAWN = "WITHDRAWN",
}

enum TicketClass {
  ECONOMY = "ECONOMY",
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM",
}

export interface ITicket {
  status: TicketStatus;
  price: Money;
  class: TicketClass;
  airplanePosition: string;
}

interface TicketBaseDocument extends ITicket, Document {}

export const Ticket = mongoose.model<
  TicketBaseDocument,
  Model<TicketBaseDocument>
>("Ticket", ticketSchema);
