var express = require("express");
var router = express.Router();
const Vente = require('../models/datavente');
const Type = require('../models/datatype');

router.get("/", (req, res) => {
    res.json({ message: "HELLOW WORLDUUHHHH" });

  
  });
  

module.exports = router;