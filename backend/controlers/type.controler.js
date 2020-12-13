const Type2 = require('../models/datatype2');

//controleur pour get les types
  const getType = (req, res) => {
    Type2.find((err, data) => {
      if (err) return console.log();
      return res.json({ success: true, data: data });
    });

  }

  //controleur pour supprimer un type

  const supp = (req, res) => {
    Type2.findByIdAndDelete(req.params.id,(err,test)=>
	{res.status(200).json(test);
	})
      
  }

  //controleur pour ajouter un type

  const ajout = (req, res) => {
    let data = new Type2();
  
    const { id, nom, desc, image } = req.body;
  
    if ((!id && id !== 0) || !nom || !desc || !image ) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    
    data.nom = nom;
    data.id = id;
    data.desc = desc;
    data.image = image;

    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  }
  

  module.exports = {getType, supp, ajout}