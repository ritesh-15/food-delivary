import mongoose from "mongoose";

const connection = async () => {
  mongoose.connect();
};

export default connection;
