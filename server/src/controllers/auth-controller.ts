import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../services/Error-Handler";
import User from "../models/user-model";
import bcrypt from "bcrypt";
import { User as UserInterface } from "../interfaces/User-Interface";
import TokenService from "../services/Token-service";
import Token from "../models/Token-model";
class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    const { name, email, number, password } = req.body;

    if (!name || !email || !number || !password) return;

    try {
      const isUserFound = await User.findOne({ email });

      if (isUserFound)
        return next(ErrorHandler.badRequest("User already exists!"));

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = {
        name,
        password: hashedPassword,
        email,
        number,
      };

      const user: UserInterface = await User.create(newUser);

      const { accessToken, refreshToken } = TokenService.generateTokens(
        user._id
      );

      await Token.create({ userId: user._id, token: refreshToken });

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 2,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 2,
        httpOnly: true,
      });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async sendOTP(req: Request, res: Response, next: NextFunction) {}

  // login controller
  static async login(req: Request, res: Response, next: NextFunction) {}
}

export default AuthController;
