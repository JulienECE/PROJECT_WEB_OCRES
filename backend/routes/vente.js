var express = require("express");
var router = express.Router();
const Vente2 = require('../models/dataVente2');
const Type = require('../models/datatype');

const DataControl = require("../controlers/vente.controler");

  
  /*router.get("/getData", (req, res) => {
    Vente2.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });*/

  
  /*router.post("/putData", (req, res) => {
    let data = new Vente2();
  
    const { type, parfum, date, age } = req.body;
  
    if (!type || !parfum || !date || !age) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }

    data.type = type;
    data.parfum = parfum;
    data.date = date;
    data.age = age;
    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });*/

  //route pour get les ventes
  router.get("/getData", DataControl.getData);
  //route pour ajouter des ventes
  router.put("/putData", DataControl.putData);
  

module.exports = router;