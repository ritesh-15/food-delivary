import crypto from "crypto";
import { HASH_SECRET } from "../keys/secrets";

class OtpService {
  data: string;
  time: Date;
  expiresIn: number;
  payload: string;
  otp: string;

  constructor(payload: string, otp?: string, expiresIn?: number) {
    this.time = new Date();
    this.expiresIn = expiresIn || Date.now() + 1000 * 60 * 2;
    this.payload = payload;
    this.otp = otp || this.generateOtp();
    this.data = `${this.payload}.${this.otp}.${this.expiresIn}`;
  }

  private generateOtp(): string {
    // create array of letters
    const letters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // generate random string from letters array
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += letters[Math.floor(Math.random() * letters.length)];
    }

    return otp.toUpperCase();
  }

  hash() {
    return crypto
      .createHmac("sha256", HASH_SECRET)
      .update(this.data)
      .digest("hex");
  }

  static verify(email: string, otp: string, expiresIn: number, hash: string) {
    const generatedOtp = new OtpService(email, otp, expiresIn);

    return generatedOtp.hash() === hash;
  }
}

export default OtpService;
