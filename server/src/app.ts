import express, { Express, NextFunction, Request, Response } from "express";
import path from "path";
import cors from "cors";
import { airportsRouter } from "./routes/airportRoutes";
import { flightRouter } from "./routes/flightRoutes";
import { purchaseRouter } from "./routes/purchaseRoutes";
import { userRouter } from "./routes/userRoutes";
import { AppError } from "./utils/AppError";
import { globalErrorHandler } from "./utils/globalErrorHandler";

export const app: Express = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/", (req: Request, res: Response) => {
  res.send("This is PolskyJet Airlines API");
});

app.use("/api/v1/airports", airportsRouter);
app.use("/api/v1/flights", flightRouter);
app.use("/api/v1/purchase", purchaseRouter);
app.use("/api/v1/user", userRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
