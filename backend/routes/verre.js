var express = require("express");
var router = express.Router();
const Vente = require('../models/datavente');
const Verre = require('../models/dataverre');


  
  router.get("/getVerre", (req, res) => {

    Verre.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
      });


  });

  router.post("/updateVerre", (req, res) => {
    const { id, update } = req.body;
    Verre.findOneAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  router.post("/putVerre", (req, res) => {
    let data = new Verre();
  
    const { id, biere, vin } = req.body;
  
    /*if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }*/
    data.id = id;
    data.biere = biere;
    data.vin = vin;

    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

module.exports = router;