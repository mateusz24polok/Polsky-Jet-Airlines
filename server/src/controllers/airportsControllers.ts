import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import { airportModel } from "../models/airportModel";
import { AppError } from "../utils/AppError";

export const getAirports = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const airports = await airportModel.find();
    if (airports) {
      res.status(200).json({
        status: "success",
        data: airports,
      });
    } else {
      next(new AppError("Couldn't find any airports. Sorry", 401));
    }
  }
);
