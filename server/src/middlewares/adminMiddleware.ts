import { NextFunction, Request, Response } from "express";
import { User } from "../interfaces/User-Interface";
import ErrorHandler from "../services/Error-Handler";

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const activeuser = <User>req.user;

  if (activeuser.isAdmin) return next();
  return next(ErrorHandler.forbidden("Access denied!"));
};

export default adminMiddleware;
