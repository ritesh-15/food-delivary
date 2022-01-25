import mongoose from "mongoose";
import { MONGO_URI } from "../keys/secrets";

const connection = async () => {
  try {
    mongoose.connect(MONGO_URI);

    const connection = mongoose.connection;

    connection.on("open", () => console.log("Database connected succesfully!"));
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connection;
