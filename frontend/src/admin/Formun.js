import React, { Component } from 'react'
import axios from "axios";

import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//formulaire

class Formun extends Component {
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

  putDataToDB = (type, parfum, date, age) => {
    axios.post("http://localhost:3000/api/putData", { 
      type: type,
      parfum: parfum,
      date: date,
      age: age
    });
  };
  
  render () {
    
    return (
      <div>
          <h2>Ajouter une vente</h2>
          <br></br>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
             
                <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputType">Type de bougie</label>
                    <input type="text" onChange={e => this.setState({ type: e.target.value })} class="form-control" id="inputType"/>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputParfum">Parfums</label>
                    <select id="inputParfum" class="form-control" onChange={e => this.setState({ parfum: e.target.value })}>
                      <option selected>Choose...</option>
                      <option>Vanille</option>
                      <option>Cannelle</option>
                      <option>Menthe</option>
                      <option>Lavande</option>
                      <option>Bois</option>
                      <option>Tabac</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputDate">Date</label>
                    <select id="inputParfum" class="form-control" onChange={e => this.setState({ date: e.target.value })}>
                      <option selected>Choose...</option>
                      <option>Janvier</option>
                      <option>Février</option>
                      <option>Mars</option>
                      <option>Avril</option>
                      <option>Mai</option>
                      <option>Juin</option>
                      <option>Juillet</option>
                      <option>Août</option>
                      <option>Septembre</option>
                      <option>Octobre</option>
                      <option>Novembre</option>
                      <option>Décembre</option>

                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputAge">Age</label>
                    <select id="inputParfum" class="form-control" onChange={e => this.setState({ age: e.target.value })}>
                      <option selected>Choose...</option>
                      <option>18-24</option>
                      <option>25-29</option>
                      <option>30-34</option>
                      <option>35-39</option>
                      <option>40+</option>

                    </select>
                  </div>
                  
                </div>
                
                <button className="btn btn-success" onClick={() => this.putDataToDB(this.state.type, this.state.parfum, this.state.date, this.state.age)}>
            Ajouter
          </button>
              
            </div>       
          </div>    
        </div>
        
      </div>
      
    )
  }
}

export default Formun

