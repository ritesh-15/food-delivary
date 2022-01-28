import { NextFunction, Request, Response } from "express";
import { User } from "../interfaces/User-Interface";
import ErrorHandler from "../services/Error-Handler";

const restaurantMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentUser: User = <User>req.user;

  if (currentUser.isRestaurantOwner) return next();

  return next(ErrorHandler.unAuthorised());
};

export { restaurantMiddleware };
