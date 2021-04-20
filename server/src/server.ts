import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { app } from "./app";

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

app.listen(port, () => {
  console.log("Listening on the server has been started");
});
