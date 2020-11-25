import React, { Component } from 'react'


import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

import dataVente from '../Data/dataVente'

class Cardun extends Component {
  
  render () {
    
    return (
      <div className='Cardun'>
        <h3>Ventes par mois</h3>
        <center>
        <ComposedChart
        width={700}
        height={400}
        data={dataVente}
        margin={{
          top: 20, right: 0, bottom: 20, left: 0,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#FD9D9E" />
        
      </ComposedChart>
        </center>
        
      </div>
    )
  }
}

export default Cardun