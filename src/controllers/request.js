import mongoose from "mongoose";
import Request from "../models/request.js";

export const getRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate("provider").populate("client");
    console.log(requests);
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRequest = async (req, res) => {
  const Request = req.body;

  const newRequest = new Request(Request);

  try {
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateRequest = async (req, res) => {
  const { id: _id } = req.params;
  const Request = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No Request with that id" });

  const updatedRequest = await Request.findByIdAndUpdate(
    _id,
    { ...Request, _id },
    { new: true }
  );

  res.json(updatedRequest);
};

export const deleteRequest = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No Request with that id" });

  await Request.findByIdAndRemove(id);

  res.json({ message: "Request deleted successfully" });
};