import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
import fs from "fs";
import path from "path";

class TokenService {
  static generateTokens(_id: ObjectId) {
    const privateKey = fs.readFileSync(
      path.join(__dirname, "../keys/private.pem")
    );

    const accessToken = jwt.sign({ _id }, privateKey, {
      expiresIn: "30min",
      algorithm: "RS256",
    });

    const refreshToken = jwt.sign({ _id }, privateKey, {
      expiresIn: "1y",
      algorithm: "RS256",
    });

    return { accessToken, refreshToken };
  }

  static verifyAccessToken(token: string) {
    const publicKey = fs.readFileSync(
      path.join(__dirname, "../keys/public.pem")
    );
    return jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
  }

  static verifyRefreshToken(token: string) {
    const publicKey = fs.readFileSync(
      path.join(__dirname, "../keys/public.pem")
    );
    return jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
  }
}

export default TokenService;
