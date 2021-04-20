import { Request, Response, NextFunction } from "express";
import { airportModel } from "../models/airportModel";

export const getAirports = async (
  req: Request,
  res: Response
): Promise<void> => {
  const airports = await airportModel.find();

  res.status(200).json({
    status: "success",
    data: airports,
  });
};
