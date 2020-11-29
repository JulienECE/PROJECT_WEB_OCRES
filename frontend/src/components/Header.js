import React, { Component } from 'react'


import './components.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {


  
  render () {
    
    return (
      <div>
        <header className='header'>
         <img className='imgHeader' src='../logo.png'/> Dashboard 
        </header>
      </div>
    )
  }
}

export default Header