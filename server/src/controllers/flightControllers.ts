import { Request, Response, NextFunction } from "express";
import { Flight } from "../models/flightModel";
import { ApiFeatures } from "../utils/ApiFeatures";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";
import {
  GetFlightsModifiedQueryParams,
  GetFlightsRequestQueryParams,
} from "./types";

export const getFlights = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const requestQueryParams = req.query as GetFlightsRequestQueryParams;

    if (
      requestQueryParams.flightDateFrom &&
      requestQueryParams.flightDateTo &&
      requestQueryParams.flightDateFrom > requestQueryParams.flightDateTo
    ) {
      return next(
        new AppError("FlightDateFrom cannot be bigger than FlightDateTo", 400)
      );
    }

    if (
      requestQueryParams.startingCity &&
      requestQueryParams.destinationCity &&
      requestQueryParams.startingCity === requestQueryParams.destinationCity
    ) {
      return next(
        new AppError(
          "Starting flight city cannot be the same as destination city",
          400
        )
      );
    }
    const modifiedQueryParams: GetFlightsModifiedQueryParams = {
      ...requestQueryParams,
      startingDate: {
        gte: requestQueryParams.flightDateFrom || undefined,
        lte: requestQueryParams.flightDateTo || undefined,
      },
    };

    if (
      !modifiedQueryParams.flightDateFrom &&
      !modifiedQueryParams.flightDateTo
    )
      delete modifiedQueryParams.startingDate;
    if (modifiedQueryParams.flightDateFrom)
      delete modifiedQueryParams.flightDateFrom;
    if (modifiedQueryParams.flightDateTo)
      delete modifiedQueryParams.flightDateTo;

    const features = new ApiFeatures(
      Flight.find(),
      modifiedQueryParams as Record<string, unknown>
    ).filter();
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
