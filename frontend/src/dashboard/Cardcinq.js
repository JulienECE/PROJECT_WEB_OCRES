import React, { Component } from 'react'

import { RadialBarChart, RadialBar, Legend } from 'recharts';

import dataAge from '../Data/dataAge'

import './dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

let num18 = 0;
let num25 = 0;
let num30 = 0;
let num35 = 0;
let num40 = 0;

let test = [];

//couleur du disque

const COLORS = ['#FCEDA7', '#FD9D9E', '#FEC89D', '#FCAAAB', '#FDBB84'];

//fonction de remplissage du disque

const RADIAN = Math.PI / 180;
const renderCustomizedLabe = (test) => ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  console.log("salut")
  //console.log(dataAge[index].name)
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {test[0]}
    </text>
  );
};


//Age des acheteurs

class Cardcinq extends Component {
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

  getDataFromDb = () => {
    fetch("http://localhost:3000/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  adAge = (age, ageStr) => {
    let n=0;
    for(let i=0; i<= age.length; i++){
      if(age[i]==ageStr){
        n++;
      }
    }
    return n;           
  }
  
  render () {

    const {data} = this.state;
    let age = data.map(dat => dat.age);
   

    num18=this.adAge(age, '18-24');
    num25=this.adAge(age, '25-29');
    num30=this.adAge(age, '30-34');
    num35=this.adAge(age, '35-39');
    num40=this.adAge(age, '40+');

   

    const dataAge = [
      {
        name: '18-24', value: num18,
      },
      {
        name: '25-29', value: num25,
      },
      {
        name: '30-34', value: num30,
      },
      {
        name: '35-39', value: num35,
      },
      {
        name: '40+', value: num40,
      }
    
    ];

    test = dataAge.map(dat => dat.name);

   console.log(test)
    
    return (
      <div className='Cardcinq'>
        <h3>Ages des acheteurs</h3>
        <br></br>
        <center>
          <span className='dixhuit'>18-24</span>/<span className='vingtcinq'>25-29</span>/<span className='trente'>30-34</span>/<span className='trentecinq'>35-39</span>/<span className='quarente'>40+</span>
        <PieChart width={400} height={300}>
        <Pie
          data={dataAge}
          cx={180}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabe(test)}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {
            dataAge.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
        </center>

      </div>
    )
  }
}

export default Cardcinq