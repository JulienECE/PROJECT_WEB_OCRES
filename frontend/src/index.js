import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './dashboard/Main'
import Choixformulaire from './admin/Admin'
import Connexion from './connexion/Connexion'
import NotFound from './connexion/NotFound'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

//routes des différentes pages

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/home' component={Main} />
      <Route path='/admin' component={Choixformulaire} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
