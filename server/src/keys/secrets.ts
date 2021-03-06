import { config } from "dotenv";

config();

export const ACCESS_TOKEN_SECRET: string = <string>(
  process.env.ACCESS_TOKEN_SECRET
);

export const REFRESH_TOKEN_SECRET: string = <string>(
  process.env.REFRESH_TOKEN_SECRET
);

export const HASH_SECRET: string = <string>process.env.HASH_SECRET;

export const MONGO_URI = <string>process.env.MONGO_URI;

export const FORGOT_PASSWORD_SECRET = <string>(
  process.env.FORGOT_PASSWORD_SECRET
);

export const SENDER_MAIL = <string>process.env.SENDER_MAIL;

export const SENDER_MAIL_PASSWORD = <string>process.env.SENDER_MAIL_PASSWORD;

export const APP_BASE_URL = <string>process.env.APP_BASE_URL;

export const RAZORPAY_KEY_ID = <string>process.env.RAZORPAY_KEY_ID;

export const RAZORPAY_SECRET = <string>process.env.RAZORPAY_SECRET;
