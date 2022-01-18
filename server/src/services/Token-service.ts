import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../keys/secrets";

class TokenService {
  static generateTokens(_id: ObjectId) {
    const accessToken = jwt.sign({ _id }, ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    const refreshToken = jwt.sign({ _id }, REFRESH_TOKEN_SECRET, {
      expiresIn: "1y",
    });

    return { accessToken, refreshToken };
  }
}

export default TokenService;
