import React from 'react'
import { Provider } from 'react-redux'
import Baby from '../Baby'
import { Router, Switch, Route } from "react-router"
import { configureStore } from '../../store'
import './styles.css'
import CreateBaby from '../CreateBaby'

import { createBrowserHistory } from 'history'






const store = configureStore()

export const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/see/baby/:id" component={Baby}>
        </Route>
        <Route path="/">
          <CreateBaby />
        </Route>
      </Switch>
    </Router>
  </Provider>
)


export default App
