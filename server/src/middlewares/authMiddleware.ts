import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../services/Error-Handler";
import TokenService from "../services/Token-service";
import User from "../models/user-model";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.cookies;

  try {
    if (!accessToken) throw new Error();

    const isValideToken: any = TokenService.verifyAccessToken(accessToken);

    const user = await User.findById(isValideToken._id);

    if (!user) throw new Error();

    req.headers.authorization = user._id;

    next();
  } catch (error) {
    return next(ErrorHandler.unAuthorised("Invalide token!"));
  }
};
