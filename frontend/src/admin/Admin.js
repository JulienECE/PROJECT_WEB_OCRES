import React from 'react';
import './admin.css';
import Formun from './Formun'
import Formdeux from './Formdeux'
import Formtrois from './Formtrois'
import Formquatre from './Formquatre'
import 'bootstrap/dist/css/bootstrap.min.css';


import HeaderAd from '../components/HeaderAd'

import Cardun from '../dashboard/Cardun'

import Cardquatre from '../dashboard/Cardquatre'
import Cardcinq from '../dashboard/Cardcinq'
import Cardsix from '../dashboard/Cardsix'

//numéro du widget par défaut
let numForm =0;


//class qui permet d'afficher les formulaires

class Formulaire extends React.Component{


  render() {

    
    if(this.props.form===0){
      return (
        <div>
          <Formun/> 
          <br/>
          <div className='visuCard'><Cardun/></div>  
          <div className='visuCard'><Cardcinq/></div>
        </div>
       
      );
    }
    else if(this.props.form===1){
      return (
        <div>
          <Formdeux/>         
        </div>
      );
    }
    else if(this.props.form===2){
      return (
        <div>
          <Formtrois/> 
          <br/>
          <div className='visuCard'><Cardsix/></div> 
        </div>
      );
    }

    else if(this.props.form===3){
      return (
        <div>
          <Formquatre/> 
          <br/>
          <div className='visuCard'><Cardquatre/></div> 
        </div>
      );
    }
                
  }
}


//class qui permet d'afficher les boutons 
class Choixformulaire extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      numForm: 0  //numéro profil par défaut
    }
  }


//fonctions qui changent le formulaire et ses informations en fonction du bouton 
  changeWidge0 = () => {
    numForm=0;
    this.setState({numForm: 0});
  }

  changeWidge1 = () => {
    numForm=1;
    this.setState({numForm: 1});
  }

  changeWidge2 = () => {
    numForm=2;
    this.setState({numForm: 2});
  }
  

  changeWidge3 = () => {
    numForm=3;
    this.setState({numForm: 3});
  }


  render() {
    
    return (
      
      <div>
         
        <HeaderAd/>
        <div class="sidebar">
          <p>Admin</p> 
          <a href="/home">Retour</a>
          <a style={{ color: '#fff'}} onClick={this.changeWidge0}>Vente</a>
          <a style={{color: '#fff'}} onClick={this.changeWidge1}>Types bougies</a>
          <a style={{color: '#fff'}} onClick={this.changeWidge2}>Stock verre</a>
          <a style={{color: '#fff'}} onClick={this.changeWidge3}>Stock parfums</a>

        </div>
        <center>
          
        
          <br></br>
        
        <br></br> <br></br> <br></br>
        <Formulaire form={numForm} />

        </center>  
 
      </div>
     
    );
  }
}

export default Choixformulaire