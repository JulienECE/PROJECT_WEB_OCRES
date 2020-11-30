import React, { Component } from 'react'
import './dashboard.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import dataVente from '../Data/dataVente'

import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



//ventes par mois

class Cardun extends Component {
  
  render () {
    
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