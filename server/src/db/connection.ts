import mongoose from "mongoose";
import { MONGO_URI } from "../keys/secrets";

const connection = async () => {
  try {
    mongoose.connect(MONGO_URI, () =>
      console.log("Database connection established!")
    );
  } catch (error: any) {}
};

export default connection;
