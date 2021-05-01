import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

type Error = typeof AppError.prototype;

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
