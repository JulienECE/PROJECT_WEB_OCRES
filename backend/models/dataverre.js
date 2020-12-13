const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VerreSchema = new Schema(
  {
    id: Number,
    biere: Number,
    vin: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("verre", VerreSchema);