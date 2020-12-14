var express = require("express");
var router = express.Router();

const Type2 = require('../models/datatype2');

const TypeControl = require("../controlers/type.controler");


  /*router.get("/getType", (req, res) => {
    Type2.find((err, data) => {
      if (err) return console.log();
      return res.json({ success: true, data: data });
    });


  });*/

  
  
  /*router.delete('/:id', (req, res) => {
    Type2.findByIdAndDelete(req.params.id,(err,test)=>
	{res.status(200).json(test);
	})
      
  });*/
  
  

  /*router.post("/putType", (req, res) => {
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
  });*/


  //route pour get le type de bougie
  router.get("/getType", TypeControl.getType);
  //route pour supprimer un type
  router.delete("/:id", TypeControl.supp);
  //route pour ajouter un type
  router.put("/putType", TypeControl.ajout);

module.exports = router;