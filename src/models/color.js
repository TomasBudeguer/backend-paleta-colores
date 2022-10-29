import mongoose, { Schema } from "mongoose";

const coloresSchema = new Schema({
  color: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 25,
  },
});

const Color = mongoose.model("color", coloresSchema);

export default Color;
