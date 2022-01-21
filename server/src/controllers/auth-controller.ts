import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../services/Error-Handler";
import User from "../models/user-model";
import bcrypt from "bcrypt";
import { User as UserInterface } from "../interfaces/User-Interface";
import TokenService from "../services/Token-service";
import Token from "../models/Token-model";
import OtpService from "../services/OtpService";
class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    const { name, email, number, password } = req.body;

    if (!name || !email || !number || !password)
      return next(ErrorHandler.badRequest("All fields are required !"));

    try {
      const isFoundUser = await User.findOne({ email });

      if (isFoundUser)
        return next(ErrorHandler.badRequest("User already exists!"));

      const hashedPassword = await bcrypt.hash(password, 10);

      const data = {
        name,
        email,
        password: hashedPassword,
        number,
      };

      const user = await User.create(data);

      return res.json({
        ok: true,
        user: {
          email: user.email,
          _id: user.id,
        },
      });
    } catch (error) {
      return next(ErrorHandler.serverError("Internal server error !"));
    }
  }

  static async sendOTP(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    if (!email)
      return next(ErrorHandler.badRequest("All fields are required !"));

    const otp = new OtpService(email);

    const hashedOtp = otp.hash();

    return res.json({
      ok: true,
      hash: hashedOtp,
    });
  }

  // login controller
  static async login(req: Request, res: Response, next: NextFunction) {}
}

export default AuthController;
