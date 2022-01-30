import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../services/Error-Handler";
import User from "../models/user-model";
import bcrypt from "bcrypt";
import TokenService from "../services/Token-service";
import Token from "../models/Token-model";
import OtpService from "../services/OtpService";
import UserDto from "../dtos/UserDto";
import jwt from "jsonwebtoken";
import { FORGOT_PASSWORD_SECRET } from "../keys/secrets";
import EmailService from "../services/EmailService";
import { User as UserInterface } from "../interfaces/User-Interface";
import {
  loginSchemaValidation,
  registerSchemaValidation,
} from "../validation/authValidation";
import Joi from "joi";

class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    const { name, email, number, password } = req.body;

    try {
      await registerSchemaValidation.validateAsync(req.body);
    } catch (error: any) {
      return next(ErrorHandler.unProcessebleEntity(error.nessage));
    }

    try {
      const isFoundUser = await User.findOne({ email });

      if (isFoundUser)
        return next(
          ErrorHandler.badRequest("This email address is already taken!")
        );

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

    const schema = Joi.object({
      email: Joi.string().email().required(),
    });

    try {
      await schema.validateAsync({ email });
    } catch (error) {
      return next(ErrorHandler.serverError("Invalide email address!"));
    }

    try {
      const user = await User.findOne({ email });

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      const otp = new OtpService(email);

      let hashedOtp = otp.hash();

      hashedOtp = `${hashedOtp}.${otp.expiresIn}`;

      const mail = new EmailService(
        email,
        "Account verification",
        `
      <p>Hi, <h1>${user.name}</h1></p>
      <p style="display:block;">
        Welcome to foodies. We are glad you are using our flatform. Your account registration has been done succesfully. To verify your account we have send verification code to you by this email.
      </p>
      <p style="display:block;">Verification Code <h1 style="color:hsl(27, 97%, 54%)">${otp.otp}</h1> </p>
      <p style="display:block;">
        This verification code is valide for 2 min only after that it will expires. 
      </p>
      <p>Thank you.</p>
      `
      );

      await mail.send();

      return res.json({
        ok: true,
        otp: {
          hash: hashedOtp,
          email: email,
        },
      });
    } catch (error) {
      return next(ErrorHandler.serverError("Internal server error !"));
    }
  }

  static async verifyOtp(req: Request, res: Response, next: NextFunction) {
    const { email, hash, code } = req.body;

    if (!email || !hash || !code)
      return next(ErrorHandler.badRequest("All fields are required!"));

    const givenHash = <string>hash;

    const expiresIn = parseInt(givenHash.split(".")[1]);

    const hashedOtp = givenHash.split(".")[0];

    if (Date.now() > expiresIn)
      return next(ErrorHandler.badRequest("Otp expires!"));

    const isValideOtp = OtpService.verify(email, code, expiresIn, hashedOtp);

    if (!isValideOtp)
      return next(ErrorHandler.badRequest("Otp does not match!"));

    try {
      const user = await User.findOne({ email });

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      const { accessToken, refreshToken } = TokenService.generateTokens(
        user._id
      );

      await Token.create({ token: refreshToken, userId: user._id });

      res.cookie("accessToken", accessToken, {
        maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
        httpOnly: true,
      });

      return res.json({
        ok: true,
        user: new UserDto(user),
      });
    } catch (error) {
      return next(ErrorHandler.serverError("Internal server error !"));
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      await loginSchemaValidation.validateAsync(req.body);
    } catch (error: any) {
      return next(ErrorHandler.unProcessebleEntity(error.message));
    }

    try {
      const user = await User.findOne({ email }).select("+password");

      if (!user)
        return next(
          ErrorHandler.notFound("Email Address or password is wrong!")
        );

      const isValidePassword = await bcrypt.compare(password, user.password);

      if (!isValidePassword)
        return next(
          ErrorHandler.unAuthorised("Email address or password is wrong!")
        );

      const { accessToken, refreshToken } = TokenService.generateTokens(
        user._id
      );

      await Token.create({ token: refreshToken, userId: user._id });

      res.cookie("accessToken", accessToken, {
        maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
        httpOnly: true,
      });

      return res.json({
        ok: true,
        user: new UserDto(user),
      });
    } catch (error) {
      return next(ErrorHandler.serverError("Internal server error!"));
    }
  }

  static async refresh(req: Request, res: Response, next: NextFunction) {
    const {
      accessToken: recivedAccessToken,
      refreshToken: recivedRefreshToken,
    } = req.cookies;

    if (!recivedAccessToken || !recivedRefreshToken)
      return next(ErrorHandler.badRequest("All fields are required!"));

    try {
      const isTokenFound = await Token.findOne({ token: recivedRefreshToken });

      if (!isTokenFound) return next(ErrorHandler.notFound("Token not found!"));

      const isValideToken: any =
        TokenService.verifyRefreshToken(recivedRefreshToken);

      const user = await User.findById(isValideToken._id);

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      const { accessToken, refreshToken } = TokenService.generateTokens(
        user._id
      );

      await Token.deleteMany({ userId: user._id });

      await Token.create({ token: refreshToken, userId: user._id });

      res.cookie("accessToken", accessToken, {
        maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
        httpOnly: true,
      });

      return res.json({
        ok: true,
        user: new UserDto(user),
      });
    } catch (error) {
      return next(ErrorHandler.unAuthorised("Unauthorised!"));
    }
  }

  static async logout(req: Request, res: Response, next: NextFunction) {
    const authId = <UserInterface>req.user;

    try {
      await Token.deleteMany({ userId: authId._id });

      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");

      return res.json({
        ok: true,
        logout: true,
      });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async forgotPassword(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    if (!email) return next(ErrorHandler.badRequest());

    try {
      const user = await User.findOne({ email: email });

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      const token = jwt.sign({ _id: user._id }, FORGOT_PASSWORD_SECRET, {
        expiresIn: "10min",
      });

      const mail = new EmailService(
        email,
        "Password recovery link",
        `
      Hello, as per your request we have generated forgot password link for you please click this link to retrive your password http://localhost:5000/forgot-password/${token}. If you not genereated it then ignore this message.
      Thanks from foodies
      `
      );

      await mail.send();

      return res.json({
        ok: true,
      });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }
}

export default AuthController;
