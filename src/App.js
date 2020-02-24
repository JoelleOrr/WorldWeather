import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CitySearch from './pages/CitySearch'
import SingleCity from './pages/SingleCity'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={CitySearch} />
      <Route path='/cities/:id' component={(props) => <SingleCity {...props} />} />
    </Switch>
  </BrowserRouter>
)

export default App
