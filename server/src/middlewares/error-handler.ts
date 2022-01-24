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
      ok: false,
      error: {
        message: error.message,
        generatedAt: error.generatedAt,
        status: error.status,
      },
    });
  } else {
    console.log(error.message);
    return res.status(500).json({
      ok: false,
      error: {
        message: "Internal Server Error",
        generatedAt: new Date(Date.now()),
        status: 500,
      },
    });
  }
};

export default errorHandler;
