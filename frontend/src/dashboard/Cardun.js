import React, { Component } from 'react'
import './dashboard.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import dataVente from '../Data/dataVente'

import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

let numJanv = 0;
let numFev = 0;
let numMars = 0;
let numAvr = 0;
let numMai = 0;
let numJuin = 0;
let numJuil= 0;
let numAout = 0;
let numSept = 0;
let numOct = 0;
let numNov = 0;
let numDec = 0;

//ventes par mois

class Cardun extends Component {
  state = {
    data: [],
    age: null,
    type: null,
    parfum: null,
    date: null,
 
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

  //récupérer données
  getDataFromDb = () => {
    fetch("http://localhost:3000/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  //retourne le nombre de vente par mois
  adMois = (parf, moisStr) => {
    let n=0;
    for(let i=0; i<= parf.length; i++){
      if(parf[i]==moisStr){
        n++;
      }
    }
    return n;           
  }


  
  render () {
    //console.log(typeof dataParfums[0].A);
    const {data} = this.state;
    let mois = data.map(dat => dat.date);
    console.log(mois);

    numJanv=this.adMois(mois, 'janvier');
    numFev=this.adMois(mois, 'Février');
    numMars=this.adMois(mois, 'Mars');
    numAvr=this.adMois(mois, 'Avril');
    numMai=this.adMois(mois, 'Mai');
    numJuin=this.adMois(mois, 'Juin');
    numJuil=this.adMois(mois, 'Juillet');
    numAout=this.adMois(mois, 'Août');
    numSept=this.adMois(mois, 'Septembre');
    numOct=this.adMois(mois, 'Octobre');
    numNov=this.adMois(mois, 'Novembre');
    numDec=this.adMois(mois, 'Décembre');
    
    //éconsole.log(typeof this.putnbPar(cannelle));

    const dataVente = [
      {
        name: 'Janvier', pv: numJanv, amt: 1400,
      },
      {
        name: 'Février', pv: numFev, amt: 1506,
      },
      {
        name: 'Mars', pv: numMars, amt: 989,
      },
      {
        name: 'Avril', pv: numAvr, amt: 1228,
      },
      {
        name: 'Mai', pv: numMai, amt: 1100,
      },
      {
        name: 'Juin', pv: numJuin, amt: 1700,
      },
      {
        name: 'Juillet',pv: numJuil, amt: 1400,
      },
      {
        name: 'Août', pv: numAout, amt: 1506,
      },
      {
        name: 'Septembre', pv: numSept, amt: 989,
      },
      {
        name: 'Octobre', pv: numOct, amt: 1228,
      },
      {
        name: 'Novembre', pv: numNov, amt: 1100,
      },
      {
        name: 'Décembre', pv: numDec, amt: 1700,
      },
    ];

    return (
      <div className='Cardun'>
        <h3>Ventes par mois</h3>
        <br/>
        <center>
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={dataVente}

          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Bar dataKey="pv" barSize={20} fill="#FDA7A7" />
            
          </ComposedChart>
        </ResponsiveContainer>
      </div>
        </center>
        
      </div>
    )
  }
}

export default Cardun