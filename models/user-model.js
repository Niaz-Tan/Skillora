import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  bio: {
    required: true,
    type: String,
  },
  socialMedia: {
    required: true,
    type: String,
  },
  profilePicture: {
    required: true,
    type: String,
  },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);
