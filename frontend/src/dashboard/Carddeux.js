import React, { Component } from 'react'
import './dashboard.css'

import dataType from '../Data/dataTop'
import './dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

let num = 0;
let long = 0;

//type de bougie

class Carddeux extends Component {
  state = {
    data: [],
    nom: null,
    desc: null,
    image: null,
 
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

  getDataFromDb = () => {
    fetch("http://localhost:3000/type/getType")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };


  change = () => {
    if(num===long-1){
      num=0;
    }
    else{
      num++;
    }
    
    this.setState({num: num});
  }
  
  render () {

    

    const { data } = this.state;
    const nom = data.map(dat => dat.nom);
    const image = data.map(dat => dat.image);
    const desc = data.map(dat => dat.desc);

    long = nom.length;

    const img = "../"+image[num]+".png";
    
    return (
      <div className='Carddeux'>
         <h3>Types bougies</h3>
        <br>
        </br>
        <a onClick={this.change}><img className='imageType' src={img}></img></a>
        <h4>{nom[num]}</h4>
        <p>{desc[num]}</p>
      </div>
    )
  }
}

export default Carddeux