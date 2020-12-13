import React, { Component } from 'react'
import axios from "axios";

import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';

let numParf =0;

class Formulaire extends React.Component{
  state = {
    data: [],
    id:0,
    cannelle: null,
    menthe: null,
    lavande: null,
    bois: null,
    vanille: null,
    tabac: null,
    desc: null,
    image: null,
    idToDelete: null,
    numParf:0
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
    fetch("http://localhost:3000/parfum/getParf")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  updateDBca = (updateToApply) => {

    axios.post("http://localhost:3000/parfum/updateParf", {
      id: 0,
      update: { cannelle: updateToApply }
    });
  };

  updateDBme = (updateToApply) => {

    axios.post("http://localhost:3000/parfum/updateParf", {
      id: 0,
      update: { menthe: updateToApply }
    });
  };

  updateDBla = (updateToApply) => {

    axios.post("http://localhost:3000/parfum/updateParf", {
      id: 0,
      update: { lavande: updateToApply }
    });
  };

  updateDBbo = (updateToApply) => {

    axios.post("http://localhost:3000/parfum/updateParf", {
      id: 0,
      update: { bois: updateToApply }
    });
  };

  updateDBva = (updateToApply) => {

    axios.post("http://localhost:3000/parfum/updateParf", {
      id: 0,
      update: { vanille: updateToApply }
    });
  };

  updateDBta = (updateToApply) => {

    axios.post("http://localhost:3000/parfum/updateParf", {
      id: 0,
      update: { tabac: updateToApply }
    });
  };

  render() {

    const { data } = this.state;

    //condition qui modifie le form en fonction du temps
    
    if(this.props.form===0){
      return (
        <div>
          <h2>Modifier stock de Cannelle</h2>
          <br></br>
          
            <label for="inputAge">Nouveau stock (en ml)</label>
            <br/>
            <input type="number" onChange={e => this.setState({ updateToApply: e.target.value })} id="inputBouteille"/>
            <br/>
            <button className="btn btn-warning"
                  onClick={() =>
                    this.updateDBca(this.state.updateToApply)
                  }
                >
                  Modifier
                </button>
        
        </div>
       
      );  
    }
    else if(this.props.form===1){
      return (
        <div>
          <h2>Modifier stock de Menthe</h2>
          <br></br>
          
            <label for="inputAge">Nouveau stock (en ml)</label>
            <br/>
            <input type="number" onChange={e => this.setState({ updateToApply: e.target.value })} id="inputBouteille"/>
            <br/>
            <button className="btn btn-warning"
                  onClick={() =>
                    this.updateDBme(this.state.updateToApply)
                  }
                >
                  Modifier
            </button>
          
        </div>
      );
    }
    else if(this.props.form===2){
      return (
        <div>
          <h2>Modifier stock de Lavande</h2>
          <br></br>
          
            <label for="inputAge">Nouveau stock (en ml)</label>
            <br/>
            <input type="number" onChange={e => this.setState({ updateToApply: e.target.value })} id="inputBouteille"/>
            <br/>
            <button className="btn btn-warning"
                  onClick={() =>
                    this.updateDBla(this.state.updateToApply)
                  }
                >
                  Modifier
            </button>
      
        </div>
      );
    }

    else if(this.props.form===3){
      return (
        <div>
          <h2>Modifier stock de Bois</h2>
          <br></br>
        
            <label for="inputAge">Nouveau stock (en ml)</label>
            <br/>
            <input type="number" onChange={e => this.setState({ updateToApply: e.target.value })} id="inputBouteille"/>
            <br/>
            <button className="btn btn-warning"
                  onClick={() =>
                    this.updateDBbo(this.state.updateToApply)
                  }
                >
                  Modifier
            </button>
         
        </div>
      );
    }

    else if(this.props.form===4){
      return (
        <div>
          <h2>Modifier stock de Vanille</h2>
          <br></br>
          
            <label for="inputAge">Nouveau stock (en ml)</label>
            <br/>
            <input type="number" onChange={e => this.setState({ updateToApply: e.target.value })} id="inputBouteille"/>
            <br/>
            <button className="btn btn-warning"
                  onClick={() =>
                    this.updateDBva(this.state.updateToApply)
                  }
                >
                  Modifier
            </button>
        
        </div>
      );
    }

    else if(this.props.form===5){
      return (
        <div>
          <h2>Modifier stock de Tabac</h2>
          <br></br>
         
            <label for="inputAge">Nouveau stock (en ml)</label>
            <br/>
            <input type="number" onChange={e => this.setState({ updateToApply: e.target.value })} id="inputBouteille"/>
            <br/>
            <button className="btn btn-warning"
                  onClick={() =>
                    this.updateDBta(this.state.updateToApply)
                  }
                >
                  Modifier
            </button>
        
        </div>
      );
    }
                
  }
}


// formulaire

class Formquatre extends Component {
  state = {
    data: [],
    id:0,
    cannelle: null,
    menthe: null,
    lavande: null,
    bois: null,
    vanille: null,
    tabac: null,
    desc: null,
    image: null,
    idToDelete: null,
    numParf:0
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
    fetch("http://localhost:3000/parfum/getParf")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };


  

  //fonction pour changer parfum
  
  changeParf0 = () => {
    numParf=0;
    this.setState({numProf: 0});
  }

  changeParf1 = () => {
    numParf=1;
    this.setState({numProf: 1});
  }

  changeParf2 = () => {
    numParf=2;
    this.setState({numProf: 2});
  }

  changeParf3 = () => {
    numParf=3;
    this.setState({numProf: 3});
  }

  changeParf4 = () => {
    numParf=4;
    this.setState({numProf: 4});
  }

  changeParf5 = () => {
    numParf=5;
    this.setState({numProf: 5});
  }


  
  render () {

    const { data } = this.state;
    
    return (
      <center>
          <h2>Stock de Parfums</h2>
          <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf0}>Cannelle</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf1}>Menthe</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf2}> Lavande</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf3}>Bois</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf4}>Vanille</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf5}>Tabac</button></div>
          </div>
        </div>


        <br></br> <br></br> <br></br>
        <Formulaire form={numParf} />
        </center>  
    )
  }
}

export default Formquatre