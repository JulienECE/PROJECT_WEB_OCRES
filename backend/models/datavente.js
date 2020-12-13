const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VenteSchema = new Schema(
  {
    type: String,
    parfum: String,
    date: String,
    age: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("vente", VenteSchema);

