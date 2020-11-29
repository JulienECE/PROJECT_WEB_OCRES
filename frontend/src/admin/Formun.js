import React, { Component } from 'react'

import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class Formun extends Component {
  
  render () {
    
    return (
      <div>
          <h2>Ajouter une vente</h2>
          <br></br>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <form action="" method="POST">
                <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputType">Type de bougie</label>
                    <select id="inputType" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputParfum">Parfums</label>
                    <select id="inputParfum" class="form-control">
                      <option selected>Choose...</option>
                      <option>Vanille</option>
                      <option>Chocolat</option>
                      <option>Fraise</option>
                      <option>Citron</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputDate">Date</label>
                    <input type="date" class="form-control" id="inputDate"/>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputAge">Age</label>
                    <input type="number" class="form-control" id="inputAge"/>
                  </div>
                  
                </div>
                
                <button type="submit" class="btn btn-warning">Ajouter</button>
              </form>
            </div>       
          </div>    
        </div>
        
      </div>
      
    )
  }
}

export default Formun

