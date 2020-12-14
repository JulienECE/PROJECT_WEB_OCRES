import React, { Component } from 'react'

import './dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import dataLast from '../Data/dataLast'



//dernières ventes

class Cardtrois extends Component {
  state = {
    data: [],
    age: 0,
    type: null,
    date: null,
    parfum: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
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

  //récupérer ventes
  getDataFromDb = () => {
    fetch("http://localhost:3000/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };


  //remplir la liste des ventes
  setList = (type,parf, date) => {
    let listTamp = [];
    if(type.length < 10){
      for (let i = type.length; i > 0 ; i--) {
        listTamp.push(<li>{type[i]}, {parf[i]}, {date[i]}</li>)
      }
    }
    else if(type.length >= 10){
      for (let i = type.length-1; i > type.length-11; i--) {
        listTamp.push(<li>{type[i]}, {parf[i]}, {date[i]}</li>)
      }
    }
    
    return listTamp;
  };

  
  render () {
    const { data } = this.state;
    const type = data.map(dat => dat.type);
    const parf = data.map(dat => dat.parfum);
    const date = data.map(dat => dat.date);

    const list = this.setList(type, parf, date);

   
    return (
      <div className='Cardtrois'>
        <h3 className='TitreCardetrois'>Dernières ventes</h3>
        <br></br>
        <ul>
        {list}
        </ul>
        
      </div>
    )
  }
}

export default Cardtrois