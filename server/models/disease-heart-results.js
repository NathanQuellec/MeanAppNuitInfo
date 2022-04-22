import mongoose from "mongoose";

const Schema = mongoose.Schema;

const heartResultsSchema = Schema({
  prediction: {
    type: Boolean,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export const HeartResults = mongoose.model("HeartResults", heartResultsSchema);
