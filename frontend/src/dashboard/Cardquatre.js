import React, { Component } from 'react'

import './dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

//import dataParfums from '../Data/dataParfums'

//Stock parfums

let qt = 30;

class Cardquatre extends Component {
  state = {
    data: [],
    id:0,
    cannelle: null,
    menthe: null,
    lavande: null,
    bois: null,
    vanille: null,
    tabac: null,
    desc: null,
    image: null,
    idToDelete: null,
    numParf:0
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

  //récupérer stock parfum

  getDataFromDb = () => {
    fetch("http://localhost:3000/parfum/getParf")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  //retourne la quantité par parfums
  putnbPar = (parf) => {
    for(let i =0; i<151; i++){
      if(parf==i){
        return i;
      }
    }
  }
  
  render () {
    //console.log(typeof dataParfums[0].A);
    const {data} = this.state;
    let cannelle = data.map(dat => dat.cannelle);
    let menthe = data.map(dat => dat.menthe);
    let lavande = data.map(dat => dat.lavande);
    let bois = data.map(dat => dat.bois);
    let vanille = data.map(dat => dat.vanille);
    let tabac = data.map(dat => dat.tabac);

    let nCannelle = this.putnbPar(cannelle);
    let nMenthe = this.putnbPar(menthe);
    let nLavande = this.putnbPar(lavande);
    let nBois = this.putnbPar(bois);
    let nVanille = this.putnbPar(vanille);
    let nTabac = this.putnbPar(tabac);
    
    //éconsole.log(typeof this.putnbPar(cannelle));

    const dataParfums = [
      {
        subject: 'Cannelle', A: nCannelle
      },
      {
        subject: 'Menthe', A: nMenthe
      },
      {
        subject: 'Lavande', A: nLavande
      },
      {
        subject: 'Bois', A: nBois
      },
      {
        subject: 'Vanille', A: nVanille
      },
      {
        subject: 'Tabac', A: nTabac
      }
  
    ];
    
    return (
      <div className='Cardquatre'>
        <h3>Stock parfums</h3>
 
        <center>
        <RadarChart cx={150} cy={150} outerRadius={100} width={300} height={300} data={dataParfums}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#FEC89D" fill="#FCEDA7" fillOpacity={0.6} />
      </RadarChart>
        </center>
        
      </div>
    )
  }
}

export default Cardquatre