import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define Mongo URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = (await mongoose.connect(MONGO_URI)).isObjectIdOrHexString(
      (mongoose) => {
        return mongoose;
      },
    );
  }
  cached.conn = await cached.promise;
  console.log("Database connected")
  return cached.conn;
};
