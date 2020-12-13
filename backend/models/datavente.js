const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// modele des  ventes

const VenteSchema = new Schema(
  {
    type: String,
    parfum: String,
    date: String,
    age: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("vente", VenteSchema);