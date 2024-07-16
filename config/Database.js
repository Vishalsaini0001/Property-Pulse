import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  //specified field will be added to our schema

  mongoose.set("strictQuery", true);

  // if the database is already connected, don't connect again!

  if (connected) {
    console.log("MongoDB is already connected..");
    return;
  }
  //connect MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is connected..");
    connected = true;
  } catch (error) {
    console.log("error is:", error);
  }
};

export default connectDB;
