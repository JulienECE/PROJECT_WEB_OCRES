import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Cardun from './Cardun'
import Carddeux from './Carddeux'
import Cardtrois from './Cardtrois'
import Cardquatre from './Cardquatre'
import Cardcinq from './Cardcinq'
import Cardsix from './Cardsix'

import Header from '../components/Header'

import './dashboard.css';

//affichage de l'ensemble des widgets

class Main extends Component {
 
  render () {
    
    return (
      <div>
       <Header/>

        <div class="sidebar">
          <p>Home</p> 
          <a href="">Admin</a>
          <a href="/">Log out</a>
        </div>

        <div class="content">
        <div className='container-flex'>
          <div className='row'> 
            <div className='col-lg-4 col-md-6'>
            <Carddeux/>
            </div>
            <div className='col-lg-4 col-md-6'>
            <Cardun/>
            </div>
            <div className='col-lg-4 col-md-6'>
            <Cardtrois/>
            </div>
            
            <div className='col-lg-4 col-md-6'>
            <Cardquatre/>
            </div>
            <div className='col-lg-4 col-md-6'>
            <Cardcinq/>
            </div> 
            <div className='col-lg-4 col-md-6'>
            <Cardsix/>
            </div>           
          </div> 
        </div>
          
        </div>
    
      </div>
    )
  }
}

export default Main

