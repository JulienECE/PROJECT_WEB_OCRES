import React, { Component } from 'react'

import dataTop from '../Data/dataTop'

let num = 0;

class Carddeux extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      num: 0  //numéro profil par défaut
    }
  }

  change = () => {
    if(num==2){
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
         <h3>Top vente</h3>
        <br>
        </br>
        <img src={dataTop[num].image}></img>
        <p>{dataTop[num].name}<br/>{dataTop[num].parfum}</p>
        <button onClick={this.change}>change</button>
      </div>
    )
  }
}

export default Carddeux