var express = require("express");
var router = express.Router();
const Vente = require('../models/dataVente2');
const Type = require('../models/datatype2');

router.get("/", (req, res) => {
    res.json({ message: "HELLOW WORLDUUHHHH" });

  
  });
  
module.exports = router;