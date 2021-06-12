import { Request, Response, NextFunction } from "express";
import { Flight } from "../models/flightModel";
import { User } from "../models/userModel";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;
    const user = await User.findById(userId)
      .populate("purchases")
      .populate({
        path: "purchases",
        populate: { path: "flight", model: Flight },
      });
    if (!user) return next(new AppError("User doesn't exist on database", 404));

    res.status(200).json({
      status: "success",
      data: user,
    });
  }
);
