const Vente2 = require('../models/dataVente2');

const getData = (req, res) => {
    Vente2.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  }

const putData = (req, res) => {
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
  } 

module.exports = {getData, putData}