import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import { Airport } from "../models/airportModel";
import { AppError } from "../utils/AppError";

import multer from "multer";
import path from "path";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/../../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const multerFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage: multerStorage,
  limits: {
    fieldSize: 1024 * 1024 * 5,
  },
  fileFilter: multerFilter,
});

export const uploadAirportPhoto = upload.single("airportPhoto");

export const getAirports = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const airports = await Airport.find();
    if (airports) {
      res.status(200).json({
        status: "success",
        data: airports,
      });
    } else {
      next(new AppError("Couldn't find any airports. Sorry", 404));
    }
  }
);

export const createAirports = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let airportPhotoPath: string;
    //CONDITION FOR DISTINGUISH PUBLIC PATH BETWEEN LOCALHOST SERVER APP AND HEROKU SERVER APP
    if (req.hostname.includes("herokuapp")) {
      airportPhotoPath = `${req.protocol}://${req.hostname}/uploads/${req.file.filename}`;
    } else {
      airportPhotoPath = `${req.protocol}://${req.hostname}:${process.env.PORT}/uploads/${req.file.filename}`;
    }
    const newAirports = await Airport.create({
      ...req.body,
      airportPhoto: airportPhotoPath,
    });
    res.status(201).json({
      status: "success",
      data: newAirports,
    });
  }
);
