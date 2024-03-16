import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoDBConnectionString = process.env.MONGODBCONNECTIONSTRING;
const connectDB = async () => {
  try {
    console.log("connection string", mongoDBConnectionString);
    const connection = await mongoose.connect(mongoDBConnectionString);
    console.log("connected to MONGODB");
    return connection;

  } catch (error) {
    console.log("error", error);
  }
};

export default connectDB;
