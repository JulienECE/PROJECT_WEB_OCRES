import React, { Component } from 'react'

import './dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import dataParfums from '../Data/dataParfums'


class Cardquatre extends Component {
  
  render () {
    
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