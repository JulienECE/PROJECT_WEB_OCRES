import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import './dashboard.css';

//import dataNbB from '../Data/dataNbB'
import axios from 'axios';

let n=0;

var col = "black"
var col2 = "red"

//changement de la couleur en fonction du stock



//Stock bouteilles

class Cardsix extends Component {
  state = {
    data: [],
    id: 0,
    biere: 0,
    vin: 0
    
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  //récupérer stock verre
  getDataFromDb = () => {
    fetch("http://localhost:3000/verre/getVerre")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  setColor(){
    if(n[0]<=100){
      return col2;
    }
    else{
      return col;
    }

  }
  
  render () {
    const { data } = this.state;

    n = data.map(dat => (
      dat.biere+dat.vin));
      
    console.log(n[0])
    
    return (
      <div className='Cardsix'>
        <h3 className={this.setColor()}>Stock bouteilles</h3>
        <br></br><br></br>
        <h1><span className='nbBougie'>{data.length <= 0 ? "NO DB ENTRIES YET" : data.map(dat => (
         dat.biere+dat.vin))}</span> <span className='bougie'>bouteilles</span></h1>
        <br/>
        <h2><span className='nbBougie'>{data.length <= 0 ? "NO DB ENTRIES YET" : data.map(dat => (
         dat.biere))}</span> <span className='bougie'>bières</span></h2>
        <h2><span className='nbBougie'>{data.length <= 0 ? "NO DB ENTRIES YET" : data.map(dat => (
         dat.vin))}</span> <span className='bougie'>vins</span></h2>
        <br></br><br></br>

      </div>
    )
  }
}

export default Cardsix