import React, { Component } from 'react'

import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//formulaire 

class Formtrois extends Component {
  
  render () {
    
    return (
      <div>
        <h2>Modifier stock de bouteille</h2>
          <br></br>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
            <form action="" method="POST">
              <label for="inputBiere">Nouveau stock de bières</label>
              <br/>
              <input type="number" id="inputBiere"/>
              <br/>
              <button type="submit" class="btn btn-warning">Modifier</button>
            </form>
         
          
            </div>
            <div className='col-md-6'>             
            <form action="" method="POST">
              <label for="inputVin">Nouveau stock de vins</label>
              <br/>
              <input type="number" id="inputVin"/>
              <br/>
              <button type="submit" class="btn btn-warning">Modifier</button>
             </form>

            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Formtrois