import { combineReducers } from 'redux';
import pokemonCountReducer from './pokemonCountReducer';
import listPokemonReducer from './listPokemonReducer';
import findPokemonReducer from './findPokemonReducer';

const rootReducer = combineReducers({
  pokemonCountReducer,
  listPokemonReducer,
  findPokemonReducer,
});

export default rootReducer;
