const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const sampleAirportsJSON = require("../../mocks/sampleAirports.json");

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

airportSchema.statics.findCityById = async function (this, id) {
  return this.findById(id).select("city -_id").distinct("city").exec();
};

const Airport = mongoose.model("Airport", airportSchema);

const clearAirportsDbsDocument = async () => {
  try {
    console.log("Removing airports from DB has been started now");
    await Airport.deleteMany({});
    console.log("Removing airports from DB has been finished now");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const fillAirportsDbsDocument = async () => {
  try {
    console.log("Filling Airports Document has been started now");
    await Airport.insertMany(sampleAirportsJSON);
    console.log("Filling Airports Document has been finished right now");
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
          clearAirportsDbsDocument();
          break;

        case "--fill":
          fillAirportsDbsDocument();
          break;

        default:
          console.log("You provided wrong flague");
      }
    });
}

app.listen(port, () => {
  console.log("Listening on the server has been started");
});
