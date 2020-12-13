const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// modele stock de parfums

const ParfSchema = new Schema(
  {
    id: Number,
    cannelle: Number,
    menthe: Number,
    lavande: Number,
    bois: Number,
    vanille: Number,
    tabac: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("parf", ParfSchema);