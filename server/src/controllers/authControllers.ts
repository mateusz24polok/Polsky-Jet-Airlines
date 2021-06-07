import { Request, Response, NextFunction, CookieOptions } from "express";
import jwt from "jsonwebtoken";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";
import { User, UserBaseDocument } from "../models/userModel";

const signToken = (id: string) =>
  jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (
  user: UserBaseDocument,
  statusCode: number,
  res: Response
) => {
  const token = signToken(user._id);

  const cookieOptions: CookieOptions = {
    expires: new Date(
      Date.now() +
        (process.env.JWT_COOKIE_EXPIRES_IN as unknown as number) *
          24 *
          60 *
          60 *
          1000
    ),
    httpOnly: true,
  };

  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role,
    });

    createSendToken(newUser, 201, res);
  }
);
