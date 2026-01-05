import { Schema, model, Types } from "mongoose";

const ParishSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    town: String,
    location: String,
    phone: String,
    image: String,
    isCathedral: { type: Boolean, default: false },

    deanary: {
      type: Types.ObjectId,
      ref: "Deanary",
      required: true
    }
  },
  { timestamps: true }
);

ParishSchema.index({ name: "text", town: "text" });

export default model("Parish", ParishSchema);
