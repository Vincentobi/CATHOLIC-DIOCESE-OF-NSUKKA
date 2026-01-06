import { Schema, model } from "mongoose";
const DeanarySchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
}, { timestamps: true });
export default model("Deanary", DeanarySchema);
