import React, { Component } from 'react'

import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Formtrois extends Component {
  
  render () {
    
    return (
      <div>
        <h2>Modifier stock de bouteille</h2>
          <br></br>
        <form action="" method="POST">
          <label for="inputAge">Nouveau stock</label>
          <br/>
          <input type="number" id="inputBouteille"/>
          <br/>
          <button type="submit" class="btn btn-warning">Modifier</button>
        </form>
      </div>
    )
  }
}

export default Formtrois