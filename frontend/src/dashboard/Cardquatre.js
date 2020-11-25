import React, { Component } from 'react'

import { RadialBarChart, RadialBar, Legend } from 'recharts';

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import dataParfums from '../Data/dataParfums'


class Cardquatre extends Component {
  
  render () {
    
    return (
      <div className='Cardquatre'>
        <h3>Parfums</h3>
     
        <center>
        <RadarChart cx={200} cy={200} outerRadius={100} width={450} height={450} data={dataParfums}>
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