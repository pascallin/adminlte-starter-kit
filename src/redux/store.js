import { createStore,combineReducers,applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';

// Add the reducer to your store on the `routing` key
const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer
});

export default function configureStore() {
  return createStore(reducer,applyMiddleware(thunk));
}
