import { NextFunction, Request, Response } from "express";
import { PassportStatic } from "passport";
import { Strategy } from "passport-jwt";
import { ACCESS_TOKEN_SECRET } from "../keys/secrets";
import User from "../models/user-model";
import fs from "fs";
import path from "path";

const extractCookie = (req: Request) => {
  let jwt = null;

  if (req.cookies) jwt = req.cookies.accessToken;

  return jwt;
};

export const passportJwt = (passport: PassportStatic) => {
  const publicKey = fs.readFileSync(path.join(__dirname, "../keys/public.pem"));
  passport.use(
    new Strategy(
      {
        jwtFromRequest: extractCookie,
        secretOrKey: publicKey,
        algorithms: ["RS256"],
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
