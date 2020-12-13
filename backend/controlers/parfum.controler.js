const Parf = require('../models/dataparf');

const getParf = (req, res) => {
    Parf.find((err, data) => {
      if (err) return console.log();
      return res.json({ success: true, data: data });
    });
  }

  const updateParf = (req, res) => {
    const { id, update } = req.body;
    Parf.findOneAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  }


module.exports = {getParf, updateParf}