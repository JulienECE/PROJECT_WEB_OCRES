import React, { Component } from 'react'

import Cardun from './Cardun'
import Carddeux from './Carddeux'
import Cardtrois from './Cardtrois'
import Cardquatre from './Cardquatre'
import Cardcinq from './Cardcinq'
import Cardsix from './Cardsix'

import Header from '../components/Header'

import './dashboard.css';



class Main extends Component {


  
  render () {
    
    return (
      <div>
       <Header/>

        <div class="sidebar">
          <p>{this.props.match.params.pseudo}</p> 
          <a href={`/admin/${this.props.match.params.pseudo}`}>Admin</a>
          <a href="/">Log out</a>
        </div>

        <div class="content">
        <div className='container-flex'>
          <div className='row'> 
            <div className='col-lg-12 col-md-12'>
            <Cardun/>
            </div>
            <div className='col-lg-4 col-md-6'>
            <Cardtrois/>
            </div>
            <div className='col-lg-4 col-md-6'>
            <Carddeux/>
            </div>
            <div className='col-lg-4 col-md-4'>
            <Cardsix/>
            </div>
            <div className='col-lg-6 col-md-8'>
            <Cardquatre/>
            </div>
            <div className='col-lg-6 col-md-12'>
            <Cardcinq/>
            </div>            
          </div> 
        </div>
          
        </div>
    
      </div>
    )
  }
}

export default Main

