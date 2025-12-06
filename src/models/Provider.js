import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  profilePicture: { type: String },
  serviceType: { type: [String] },
  category: { type: [String] },
  rating: { type: Number },
  totalReviews: { type: Number },
  bio: { type: String },
  skills: { type: [String] },
  certifications: { type: [String] },
  projectsCompleted: { type: Boolean },
  hourlyRate: { type: Number },
  location: { type: String },
  joinDate: { type: Date, default: new Date() },
  portfolio: { type: String },
  feedback: { type: [String] },
  clientName: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, default: 0 },
  comment: { type: [String] },
  date: { type: Date, default: new Date() },
  projectPhotos: { type: String, required: true },
  specificQuestions: { type: [String] },
});

export default mongoose.model("Provider", providerSchema);
