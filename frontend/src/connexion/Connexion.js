import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './connexion.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header'


// connexion

class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render () {
    if (this.state.goToChat) {
      if(this.state.pseudo ==='aure' || this.state.pseudo ==='juju'){
        return <Redirect push to={`/home/${this.state.pseudo}`} />
      }
      else{
        alert('Mauvais pseudo');
        this.state.goToChat = false;
      }
      
    }

    return (
        <div>
        
            <Header/>

            <div className='connexionBox'>                              
                <form className='connexion' onSubmit={this.handleSubmit}>
                <input
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='Pseudo'
                    type='text'
                    required />
                <button type='submit'>GO</button>
                </form>
            </div>
    
        </div>
    )
        
  }
}

export default Connexion