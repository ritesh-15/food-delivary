import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../services/Error-Handler";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ErrorHandler) {
    return res.status(error.status).json({
      message: error.message,
      generatedAt: error.generatedAt,
      status: error.status,
    });
  } else {
    return res.status(500).json({
      message: "Internal server error!",
      generatedAt: Date.now(),
      status: 500,
    });
  }
};

export default errorHandler;
