import React, { Component } from 'react'
import './dashboard.css'

import dataType from '../Data/dataTop'
import './dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

let num = 0;

class Carddeux extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      num: 0  //numéro profil par défaut
    }
  }

  change = () => {
    if(num===2){
      num=0;
    }
    else{
      num=num+1;
    }
    
    this.setState({num: num});
  }
  
  render () {
    
    return (
      <div className='Carddeux'>
         <h3>Types bougies</h3>
        <br>
        </br>
        <a onClick={this.change}><img className='imageType' src={dataType[num].image}></img></a>
        <h4>{dataType[num].name}</h4>
        <p>{dataType[num].desc}</p>
      </div>
    )
  }
}

export default Carddeux