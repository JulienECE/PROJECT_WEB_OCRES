import React, { Component } from 'react'


import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";

//formulaire 

class Formtrois extends Component {
  state = {
    data: [],
    id:0,
    biere: 0,
    vin: 0
  };

  putDataToDBZ = (id,biere, vin) => {
    axios.post("http://localhost:3000/verre/putVerre", { 
      id: id,
      biere: biere,
      vin: vin
    });
  };

  updateDBbi = (updateToApply) => {

    axios.post("http://localhost:3000/verre/updateVerre", {
      id: 0,
      update: { biere: updateToApply }
    });
  };

  updateDBvi = (updateToApply) => {

    axios.post("http://localhost:3000/verre/updateVerre", {
      id: 0,
      update: { vin: updateToApply }
    });
  };
  

  
  render () {
    const { data } = this.state;

    
    return (
      <div>
        <h2>Modifier stock de bouteille</h2>
          <br></br>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
         
                <label for="inputAge">Nouveau stock biere</label>
                <br/>
                <input type="number" onChange={e => this.setState({ updateToApply: e.target.value })} id="inputBouteille"/>
                <br/>
                <button className="btn btn-warning"
                  onClick={() =>
                    this.updateDBbi(this.state.updateToApply)
                  }
                >
                  Modifier
                </button>
                
              </div> 
            
              <div className='col-md-12'>
            
                <label for="inputAge">Nouveau stock vin</label>
                <br/>
                <input type="number" onChange={e => this.setState({ updateToApply: e.target.value })} id="inputBouteille"/>
                <br/>
                <button className="btn btn-warning"
                  onClick={() =>
                    this.updateDBvi(this.state.updateToApply)
                  }
                >
                  Modifier
                </button>
                
              </div>         
            </div>    
          </div>
        
      </div>
    )
  }
}

export default Formtrois