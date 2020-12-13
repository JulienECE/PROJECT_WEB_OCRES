import React, { Component } from 'react'
import axios from "axios";

import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import dataType from '../Data/dataTop'



//affichage de chaque type de bougie

class Carddeux extends Component {
  state = {
    data: [],
    id:0,
    nom: null,
    desc: null,
    image: null,
    idToDelete: 0,
 
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
    fetch("http://localhost:3000/type/getType")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };


  putDataToDBZ = (nom, desc, image) => {
    
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3000/type/putType", { 
      id: idToBeAdded,
      nom: nom,
      desc: desc,
      image: image
    });
  };


  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    console.log(idTodelete);
    this.state.data.forEach(dat => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });
    console.log(objIdToDelete);
    axios.delete(`http://localhost:3000/type/${objIdToDelete}`)
    .then(response => {
      console.log(response);
    
  });
  }
  

  render () {
    const { data } = this.state;
    const img = "../"+this.props.image+".png";
    //const img = "../Bougie.png"
    console.log(img);
    
    return (
      <div className='col-lg-4 col-md-6'>
        <div className='Carddeux'>
         <h3>{this.props.nom}</h3>
        <br>
        </br>
        <img src={img}></img>
        <p>{this.props.desc}</p>
        <button className='btn btn-danger' onClick={() => this.deleteFromDB(this.props.id)}>
          Supprimer
        </button>
      </div>
      </div>
      
    )
  }
}

// formulaire 2

class Formdeux extends Component {
  state = {
    data: [],
    id:0,
    nom: null,
    desc: null,
    image: null,
    idToDelete: 0,
 
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
    fetch("http://localhost:3000/type/getType")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };


  putDataToDBZ = (nom, desc, image) => {

    if(!nom || !desc || !image){
      window.alert('non mais oh !! Il manque des informations')
    }


    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3000/type/putType", { 
      id: idToBeAdded,
      nom: nom,
      desc: desc,
      image: image
    });
  };


  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    console.log(idTodelete);
    this.state.data.forEach(dat => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });
    console.log(objIdToDelete);
    axios.delete(`http://localhost:3000/type/${objIdToDelete}`)
    .then(response => {
      console.log(response);
    
  });
};
  
  render () {
    const { data } = this.state;

    return (
      <div>
          <h2>Types de bougies</h2>
          <br></br>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
         
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputNom">Nom</label>
                      <input type="text" onChange={e => this.setState({ nom: e.target.value })} class="form-control" id="inputDate"/>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputDescription">Description</label>
                      <input type="text"  onChange={e => this.setState({ desc: e.target.value })} class="form-control" id="inputDescription"/>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputImage">Image</label>
                      <input type="text" onChange={e => this.setState({ image: e.target.value })} class="form-control" id="inputImage"/>
                    </div>
                 
                  </div>
                  
                  <button className="btn btn-success" onClick={() => this.putDataToDBZ(this.state.nom, this.state.desc, this.state.image)}>
                    Ajouter
                  </button>
             
              </div> 
                        
            </div>    
          </div>
          <br/>
          <div className='container'>
            <div className='row'>
            {data.length <= 0 ? "NO DB ENTRIES YET" : data.map(dat => (
            <Carddeux id={dat.id} nom={dat.nom} image={dat.image} desc={dat.desc} />
          ))}
            </div>
          </div>
        </div>
    )
  }
}

export default Formdeux