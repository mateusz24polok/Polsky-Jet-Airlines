const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const sampleFlightsJSON = require("../../mocks/sampleFlights.json");

dotenv.config({
  path: path.join(__dirname, "./../../config.env"),
});

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
    await Flight.insertMany(sampleFlightsJSON);
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
