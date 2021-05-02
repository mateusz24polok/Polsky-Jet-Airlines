import mongoose, { Model, Types, Document, Schema } from "mongoose";

const airportSchema: Schema = new Schema({
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

enum Continent {
  EUROPE = "Europe",
  NORTH_AMERICA = "North America",
  SOUTH_AMERICA = "South America",
  ASIA = "Asia",
  AUSTRALIA = "Australia",
  AFRICA = "Africa",
}

interface IAirport {
  city: string;
  country: string;
  continent: Continent;
  airport: string;
  airportKey: string;
  terminals: Array<string>;
  startingPoint: boolean;
  destinationPoint: boolean;
}

export interface AirportBaseDocument extends IAirport, Document {
  terminals: Types.Array<string>;
}

export interface AirportModel extends Model<AirportBaseDocument> {
  findCityById(id: string): Promise<Array<string>>;
}

//STATIC METHODS

airportSchema.statics.findCityById = function (
  this: Model<AirportBaseDocument>,
  id: string
): Promise<Array<string>> {
  return this.findById(id).select("city -_id").distinct("city").exec();
};

export const Airport = mongoose.model<AirportBaseDocument, AirportModel>(
  "Airport",
  airportSchema
);
