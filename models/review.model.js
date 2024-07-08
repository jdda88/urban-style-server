import mongoose, { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxLength: 60 },
    review: {
      type: String,
      required: true,
      trim: true,
      maxLength: 500,
      minLength: 10,
    },
    idea: { type: Schema.Types.ObjectId, ref: "Idea", required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema)