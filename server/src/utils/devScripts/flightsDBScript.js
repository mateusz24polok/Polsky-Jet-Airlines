const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const sampleFlightsJSON = require("../../mocks/sampleFlights.json");

dotenv.config({
  path: path.join(__dirname, "./../../config.env"),
});

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

airportSchema.statics.findCityById = function (id) {
  return this.findById(id).select("city -_id").distinct("city").exec();
};

const Airport = mongoose.model("Airport", airportSchema);

const flightSchema = new mongoose.Schema({
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
      validator: function (val) {
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

//DOCUMENT MIDDLEWARE - ASSING STARTING AND DESTINATION CITY TO SEPARATE FIELDS
flightSchema.pre("save", async function (next) {
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

const Flight = mongoose.model("Flight", flightSchema);

const clearFlightsDbsDocument = async () => {
  try {
    console.log("Removing flights from DB has been started now");
    await Flight.deleteMany({});
    console.log("Removing flights from DB has been finished now");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const fillFlightsDbsDocument = async () => {
  try {
    console.log("Filling flights Document has been started now");
    await Flight.create(sampleFlightsJSON);
    console.log("Filling flights Document has been finished right now");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const app = express();

const port = process.env.PORT || 5000;

const DBConnetionURI = process.env.MONGODB_URI;
console.log("connection with mongo", DBConnetionURI);

if (DBConnetionURI) {
  mongoose
    .connect(DBConnetionURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((DB) => {
      console.log("Connected do the database");
      switch (process.argv[2]) {
        case "--clear":
          clearFlightsDbsDocument();
          break;

        case "--fill":
          fillFlightsDbsDocument();
          break;

        default:
          console.log("You provided wrong flague");
      }
    });
}

app.listen(port, () => {
  console.log("Listening on the server has been started");
});
