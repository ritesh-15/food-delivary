import crypto from "crypto";
import { HASH_SECRET } from "../keys/secrets";

class OtpService {
  data: string;
  time: Date;
  expiresIn: number;
  payload: string;
  otp: string;

  constructor(payload: string) {
    this.time = new Date();
    this.expiresIn = Date.now() + 1000 * 60 * 10;
    this.payload = payload;
    this.otp = crypto.randomBytes(3).toString("hex");
    this.data = `${this.payload}.${this.otp}.${this.expiresIn}`;
  }

  hash() {
    return crypto
      .createHmac("sha256", HASH_SECRET)
      .update(this.data)
      .digest("hex");
  }
}

export default OtpService;
