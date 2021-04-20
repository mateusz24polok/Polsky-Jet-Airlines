import { Request, Response, NextFunction } from "express";

export const getAirports = (req: Request, res: Response): void => {
  res.status(200).json({
    tours: [
      { id: 0, airport: "London" },
      { id: 1, airport: "Warsaw" },
      { id: 2, airport: "Barcelona" },
    ],
  });
  res.end();
};
