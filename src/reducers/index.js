import { combineReducers } from 'redux';
import pokemonCountReducer from './pokemonCountReducer';

const rootReducer = combineReducers({
  pokemonCountReducer,
});

export default rootReducer;
