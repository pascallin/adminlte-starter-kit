import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App.jsx'
import Home from './components/Home.jsx'
import CounterContainer from 'components/counter/CounterContainer.jsx'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="counter" component={CounterContainer}/>
  </Route>
);

export default routes
