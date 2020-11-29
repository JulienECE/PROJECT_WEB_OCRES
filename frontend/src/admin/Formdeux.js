import React, { Component } from 'react'


import './admin.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import dataType from '../Data/dataTop'


class Carddeux extends Component {

  
  render () {
    
    return (
      <div className='col-lg-4 col-md-6'>
        <div className='Carddeux'>
         <h3>{dataType[this.props.num].name}</h3>
        <br>
        </br>
        <img src={dataType[this.props.num].image}></img>
        <p>{dataType[this.props.num].desc}</p>
        <button className='btn btn-danger'>supprimer</button>
      </div>
      </div>
      
    )
  }
}



class Formdeux extends Component {

  
  
  render () {

    const list = []

    //affiche c'est super autant de fois que nécessaire
    for (let i = 0; i < dataType.length; i++) {
      list.push(<Carddeux num={i}/>)
    }
    
    return (
      <div>
          <h2>Types de bougies</h2>
          <br></br>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <form action="" method="POST">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputNom">Nom</label>
                      <input type="text" class="form-control" id="inputDate"/>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputDescription">Description</label>
                      <input type="description" class="form-control" id="inputDescription"/>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputImage">Image</label>
                      <input type="test" class="form-control" id="inputImage"/>
                    </div>
                    
                    
                  </div>
                  
                  <button type="submit" class="btn btn-warning">Ajouter</button>
                </form>
              </div>       
            </div>    
          </div>
          <br/>
          <div className='container'>
            <div className='row'>
                {list}
            </div>
          </div>
        </div>
    )
  }
}

export default Formdeux