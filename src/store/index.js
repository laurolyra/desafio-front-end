import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pokemonStore = () => {
  const myStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return myStore;
};

export default pokemonStore;
