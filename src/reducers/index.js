import { combineReducers } from 'redux';
import pokemonCountReducer from './pokemonCountReducer';
import listPokemonReducer from './listPokemonReducer';
import findPokemonReducer from './findPokemonReducer';
import pokedexReducer from './pokedexReducer';

const rootReducer = combineReducers({
  pokemonCountReducer,
  listPokemonReducer,
  findPokemonReducer,
  pokedexReducer,
});

export default rootReducer;
