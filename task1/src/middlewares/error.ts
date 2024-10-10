import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../utils/error/error.handler";

export const ErrorMiddeWare = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal server error";

  res.status(error.statusCode).json({ success: false, message: error.message });
};
