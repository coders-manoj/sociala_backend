import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide username!"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password!"],
    },
    name: { type: String, required: [true, "Please provide name!"] },
    mobile: { type: Number, required: [true, "Please provide mobile!"] },
    profile: { type: String },
    otp: { type: String },
  },
  { timestamps: true }
);

export default model("User", userSchema);
