import mongoose from "mongoose";

const Schema = mongoose.Schema;

const avcInfoSchema = Schema({
  gender: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  hypertension: {
    type: Boolean,
    required: true,
  },
  heartDisease: {
    type: Boolean,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  residence: {
    type: String,
    required: true,
  },
  glucose: {
    type: Number,
    required: true,
  },
  bmi: {
    type: Number,
    required: true,
  },
  
});

export const avcInfo = mongoose.model("avcInfo", avcInfoSchema);
