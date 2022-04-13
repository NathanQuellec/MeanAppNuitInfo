import mongoose from "mongoose";

const Schema = mongoose.Schema;

const diabeteResultsSchema = Schema({
  prediction: {
    type: Boolean,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export const DiabeteResults = mongoose.model("DiabeteResults", diabeteResultsSchema);
