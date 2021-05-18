import mongoose, { Document, Schema, Types, Model } from "mongoose";
import { Airport, AirportBaseDocument } from "./airportModel";

const flightSchema: Schema = new Schema({
  status: {
    type: String,
    enum: ["OPEN", "CANCELLED", "CLOSED"],
    required: true,
    default: "OPEN",
  },
  startingAirport: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Airport",
  },
  startingCity: String,
  destinationAirport: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Airport",
  },
  destinationCity: String,
  startingDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (val: Date): Boolean {
        return val.getTime() > new Date().getTime();
      },
      message: "Starting Date of flight must be greater than today",
    },
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

enum FlightStatus {
  OPEN = "OPEN",
  CANCELLED = "CANCELLED",
  CLOSED = "CLOSED",
}

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

interface Ticket {
  status: TicketStatus;
  price: Money;
  class: TicketClass;
  airplanePosition: string;
}

interface IFlight {
  status: FlightStatus;
  startingAirport: AirportBaseDocument["_id"];
  startingCity: string;
  destinationAirport: AirportBaseDocument["_id"];
  destinationCity: string;
  startingDate: Date;
  ticket: Array<Ticket>;
  estimatedFlightTime: number;
}

interface FlightBaseDocument extends IFlight, Document {
  ticket: Types.Array<Ticket>;
}

flightSchema.pre(/^find/, function (this: any, next) {
  this.find({ startingDate: { $gte: new Date() } });
  next();
});

//DOCUMENT MIDDLEWARE - ASSIGN STARTING AND DESTINATION CITY TO SEPARATE FIELDS
flightSchema.pre<FlightBaseDocument>("save", async function (next) {
  const startingcityArray = await Airport.findCityById(this.startingAirport);
  const destinationCityArray = await Airport.findCityById(
    this.destinationAirport
  );
  const startingCity = startingcityArray[0];
  const destinationCity = destinationCityArray[0];
  this.startingCity = startingCity;
  this.destinationCity = destinationCity;
  next();
});

export const Flight = mongoose.model<
  FlightBaseDocument,
  Model<FlightBaseDocument>
>("Flight", flightSchema);
