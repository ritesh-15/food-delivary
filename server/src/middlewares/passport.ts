import { NextFunction, Request, Response } from "express";
import { PassportStatic } from "passport";
import { Strategy } from "passport-jwt";
import { ACCESS_TOKEN_SECRET } from "../keys/secrets";
import User from "../models/user-model";

const extractCookie = (req: Request) => {
  let jwt = null;

  if (req.cookies) jwt = req.cookies.accessToken;

  return jwt;
};

export const passportJwt = (passport: PassportStatic) => {
  passport.use(
    new Strategy(
      {
        jwtFromRequest: extractCookie,
        secretOrKey: ACCESS_TOKEN_SECRET,
      },
      async (payload, done) => {
        try {
          const user = await User.findById(payload._id);

          if (!user) return done(null, false);

          done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};
