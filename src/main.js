import { render } from 'react-dom'
import React from 'react'

import configureStore from './redux/store'
const store = configureStore();
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

import { Provider } from 'react-redux'
import routes from './routes'

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
