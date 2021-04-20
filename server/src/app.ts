import express, { Express } from "express";
import cors from "cors";
import { airportsRouter } from "./routes/airportRoutes";

export const app: Express = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.send("<h1>Main Page from API</h1>");
});

app.use("/api/v1/airports", airportsRouter);
