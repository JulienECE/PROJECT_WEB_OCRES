import React, { Component } from 'react'

import { RadialBarChart, RadialBar, Legend } from 'recharts';

import dataAge from '../Data/dataAge'

import './dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';



//couleur du disque

const COLORS = ['#FCEDA7', '#FD9D9E', '#FEC89D', '#FCAAAB', '#FDBB84'];

//fonction de remplissage du disque

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {dataAge[index].name}
    </text>
  );
};


//Age des acheteurs

class Cardcinq extends Component {
  
  render () {
    
    return (
      <div className='Cardcinq'>
        <h3>Ages des acheteurs</h3>
        <br></br>
        <center>
        <PieChart width={400} height={300}>
        <Pie
          data={dataAge}
          cx={180}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
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