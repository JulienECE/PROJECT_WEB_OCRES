const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// modele des types de bougie

const TypeSchema = new Schema(
  {
    id: Number,
    nom: String,
    desc: String,
    image: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("type", TypeSchema);