const Parf = require('../models/dataparf');


//controleur pour get les parfums

const getParf = (req, res) => {
    Parf.find((err, data) => {
      if (err) return console.log();
      return res.json({ success: true, data: data });
    });
  }

//controleur pour update les parfums

  const updateParf = (req, res) => {
    const { id, update } = req.body;
    Parf.findOneAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  }


module.exports = {getParf, updateParf}