import mongoose, { Document, Schema, Model } from "mongoose";
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
  tickets: {
    economy: {
      amount: {
        type: Number,
        required: true,
        min: 0,
        default: 30,
      },
      price: {
        type: Number,
        required: true,
        min: 1,
      },
    },
    standard: {
      amount: {
        type: Number,
        required: true,
        min: 0,
        default: 30,
      },
      price: {
        type: Number,
        required: true,
        min: 1,
      },
    },
    premium: {
      amount: {
        type: Number,
        required: true,
        min: 0,
        default: 30,
      },
      price: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  },
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

interface Tickets {
  economy: {
    amount: number;
    price: number;
  };
  standard: {
    amount: number;
    price: number;
  };
  premium: {
    amount: number;
    price: number;
  };
}

export interface IFlight {
  status: FlightStatus;
  startingAirport: AirportBaseDocument["_id"];
  startingCity: string;
  destinationAirport: AirportBaseDocument["_id"];
  destinationCity: string;
  startingDate: Date;
  tickets: Tickets;
  estimatedFlightTime: number;
}

export interface FlightBaseDocument extends IFlight, Document {}

flightSchema.pre(/^find/, function (this: Model<any>, next) {
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
