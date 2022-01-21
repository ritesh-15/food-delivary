import { config } from "dotenv";

config();

const ACCESS_TOKEN_SECRET: string = <string>process.env.ACCESS_TOKEN_SECRET;

const REFRESH_TOKEN_SECRET: string = <string>process.env.REFRESH_TOKEN_SECRET;

const HASH_SECRET: string = <string>process.env.HASH_SECRET;

export { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET, HASH_SECRET };
