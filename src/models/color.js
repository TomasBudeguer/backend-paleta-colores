import mongoose, { Schema } from "mongoose";

const coloresSchema = new Schema({
  nombreColor: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 20,
  },
  hexadecimal: {
    type: String,
    unique: true,
    minLength: 6,
    maxLength: 6,
  },
  rgbOrgba: {
    type: String,
    unique: true,
    minLength: 4,
    maxLength: 50,
  },
});

const Color = mongoose.model("color", coloresSchema);

export default Color;
