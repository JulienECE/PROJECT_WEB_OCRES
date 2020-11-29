import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import './dashboard.css';

import dataNbB from '../Data/dataNbB'

var col = "black"

if(dataNbB<=100){
  col = "red";

}

class Cardsix extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      color: col, //couleur par défaut     
    }
  }
  
  render () {
    
    return (
      <div className='Cardsix'>
        <h3 className={this.state.color}>Stock bouteilles</h3>
        <br></br><br></br>
        <h1><span className='nbBougie'>{dataNbB}</span> <span className='bougie'>bouteilles</span></h1>
        <br></br><br></br>
      </div>
    )
  }
}

export default Cardsix