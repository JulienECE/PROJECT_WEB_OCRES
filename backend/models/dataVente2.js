const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vente2Schema = new Schema(
  {
    type: String,
    parfum: String,
    date: String,
    age: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("vente2", Vente2Schema);