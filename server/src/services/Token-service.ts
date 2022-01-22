import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../keys/secrets";

class TokenService {
  static generateTokens(_id: ObjectId) {
    const accessToken = jwt.sign({ _id }, ACCESS_TOKEN_SECRET, {
      expiresIn: "2d",
    });
    const refreshToken = jwt.sign({ _id }, REFRESH_TOKEN_SECRET, {
      expiresIn: "1y",
    });

    return { accessToken, refreshToken };
  }

  static verifyAccessToken(token: string) {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  }
}

export default TokenService;
