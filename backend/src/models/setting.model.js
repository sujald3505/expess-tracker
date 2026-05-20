import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  currency: {
    type: String,

    default: "INR",
  },

  theme: {
    type: String,

    default: "light",
  },
});

export const Setting = mongoose.model("Setting", settingSchema);
