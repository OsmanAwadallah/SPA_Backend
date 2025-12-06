import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin","provider","client"],
    },
    specialty: {
      type: String,
    },
    portfolio: {
      type: String,
    },
    policy: {
      type: Boolean,
      required: true,
    },
    services: {
      type: [String],
    },
    projects: {
      type: [String],
    },
    degree: {
      type: [String],
    },
    langs: {
      type: [String],
    },
    frameworks: {
      type: [String],
    },
    password: {
      type: String,
      required: true,
    },
    checkPassword: {
      type: String,
      minlength: 8,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
