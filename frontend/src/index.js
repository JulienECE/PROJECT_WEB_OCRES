import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './dashboard/Main'
import Choixformulaire from './admin/Admin'
import Connexion from './connexion/Connexion'
import NotFound from './connexion/NotFound'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/home/:pseudo' component={Main} />
      <Route path='/admin/:pseudo' component={Choixformulaire} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
