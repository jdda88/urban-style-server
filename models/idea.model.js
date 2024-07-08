import { Schema, model } from "mongoose";

const ideaSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, maxLength: 600 },
    images: [{ type: String }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    author: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Idea", ideaSchema);
