import React, { Component } from 'react'


import './components.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderAd extends Component {


  
  render () {
    
    return (
      <div>
        <header className='header'>
         <img className='imgHeader' src='../logo.png'/> Administration 
        </header>
      </div>
    )
  }
}

export default HeaderAd