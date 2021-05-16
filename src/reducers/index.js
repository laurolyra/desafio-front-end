import { combineReducers } from 'redux';
import pokemonCountReducer from './pokemonCountReducer';
import listFilterPokemonReducer from './listFilterPokemonReducer';

const rootReducer = combineReducers({
  pokemonCountReducer,
  listFilterPokemonReducer,
});

export default rootReducer;
