var express = require("express");
var router = express.Router();
const Vente2 = require('../models/dataVente2');
const Type = require('../models/datatype');


  
  router.get("/getData", (req, res) => {
    Vente2.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

  
  router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
  router.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    Data.findByIdAndRemove(id, err => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  router.post("/putData", (req, res) => {
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
  });

  router.post("/putType", (req, res) => {
    let data = new Type();
  
    const { nom, desc, image } = req.body;
  
    /*if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }*/
    data.nom = nom;
    data.desc = desc;
    data.image = image;

    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

module.exports = router;