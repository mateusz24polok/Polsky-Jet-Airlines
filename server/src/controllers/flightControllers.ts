import { Request, Response, NextFunction } from "express";
import { Flight } from "../models/flightModel";
import { ApiFeatures } from "../utils/ApiFeatures";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

export const getFlights = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const features = new ApiFeatures(Flight.find(), req.query).filter();
    const flights = await features.query
      .populate("startingAirport")
      .populate("destinationAirport");

    if (!flights) {
      return next(new AppError("Couldn't find any flights", 404));
    }

    res.status(200).json({
      status: "success",
      data: flights,
      flightsCount: flights.length,
    });
  }
);

export const createFlight = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newFlight = await Flight.create(req.body);
    res.status(201).json({
      status: "success",
      data: newFlight,
    });
  }
);
