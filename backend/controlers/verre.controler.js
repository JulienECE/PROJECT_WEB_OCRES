const Verre = require('../models/dataverre');


//controleur pour get le stock de verre

  const getVerre = (req, res) => {

    Verre.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
      });
  }

//controleur pour mettre à jour le stock de verre

  const updateVerre = (req, res) => {
    const { id, update } = req.body;
    Verre.findOneAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  }


module.exports = {getVerre, updateVerre}