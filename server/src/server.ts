import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { app } from "./app";

process.on("uncaughtException", (error: Error) => {
  console.log("Process will shut down due to synchronus error");
  console.log(error.name, error.message);
  process.exit(1);
});

dotenv.config({
  path: path.join(__dirname, "config.env"),
});

const port: number | string = process.env.PORT || 5000;

const DBConnetionURI: string | undefined = process.env.MONGODB_URI;
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
    });
}

const server = app.listen(port, () => {
  console.log("Listening on the server has been started");
});

process.on("unhandledRejection", (error: Error) => {
  console.log("Process is closed due to the unhandled rejection");
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1);
  });
});
