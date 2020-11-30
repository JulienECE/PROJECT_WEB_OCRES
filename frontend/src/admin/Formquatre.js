import React, { Component } from 'react'


import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';

let numParf =0;

class Formulaire extends React.Component{


  render() {

    //condition qui modifie le form en fonction du temps
    
    if(this.props.form===0){
      return (
        <div>
          <h2>Modifier stock de Vanille</h2>
          <br></br>
          <form action="" method="POST">
            <label for="inputAge">Nouveau stock</label>
            <br/>
            <input type="number" id="inputBouteille"/>
            <br/>
            <button type="submit" class="btn btn-warning">Modifier</button>
          </form>
        </div>
       
      );  
    }
    else if(this.props.form===1){
      return (
        <div>
          <h2>Modifier stock de Fraise</h2>
          <br></br>
          <form action="" method="POST">
            <label for="inputAge">Nouveau stock</label>
            <br/>
            <input type="number" id="inputBouteille"/>
            <br/>
            <button type="submit" class="btn btn-warning">Modifier</button>
          </form>
        </div>
      );
    }
    else if(this.props.form===2){
      return (
        <div>
          <h2>Modifier stock de Citron</h2>
          <br></br>
          <form action="" method="POST">
            <label for="inputAge">Nouveau stock</label>
            <br/>
            <input type="number" id="inputBouteille"/>
            <br/>
            <button type="submit" class="btn btn-warning">Modifier</button>
          </form>
        </div>
      );
    }

    else if(this.props.form===3){
      return (
        <div>
          <h2>Modifier stock de Menthe</h2>
          <br></br>
          <form action="" method="POST">
            <label for="inputAge">Nouveau stock</label>
            <br/>
            <input type="number" id="inputBouteille"/>
            <br/>
            <button type="submit" class="btn btn-warning">Modifier</button>
          </form>
        </div>
      );
    }

    else if(this.props.form===4){
      return (
        <div>
          <h2>Modifier stock de Chocolat</h2>
          <br></br>
          <form action="" method="POST">
            <label for="inputAge">Nouveau stock</label>
            <br/>
            <input type="number" id="inputBouteille"/>
            <br/>
            <button type="submit" class="btn btn-warning">Modifier</button>
          </form>
        </div>
      );
    }

    else if(this.props.form===5){
      return (
        <div>
          <h2>Modifier stock de Bétrave</h2>
          <br></br>
          <form action="" method="POST">
            <label for="inputAge">Nouveau stock</label>
            <br/>
            <input type="number" id="inputBouteille"/>
            <br/>
            <button type="submit" class="btn btn-warning">Modifier</button>
          </form>
        </div>
      );
    }
                
  }
}


// formulaire

class Formquatre extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      numParf: 0  //numéro parfum par défaut
    }
  }


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
    
    return (
      <center>
          <h2>Stock de Parfums</h2>
          <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf0}>Vanille</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf1}>Fraise</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf2}> Citron</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf3}>Menthe</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf4}>Chocolat</button></div>
            <div className="col-sm-4"><button className='buttonParf' onClick={this.changeParf5}> Bétrave</button></div>
          </div>
        </div>
        <br></br> <br></br> <br></br>
        <Formulaire form={numParf} />
        </center>  
    )
  }
}

export default Formquatre