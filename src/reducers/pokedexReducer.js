import { ADD_TO_POKEDEX, SELECT_POKEMON, REMOVE_FROM_POKEDEX } from '../actions/pokedexActions';

const initialState = {
  pokedex: [],
  selectedPokemon: {},
};

const removeSpecificPokemon = (pokedex, index) => {
  pokedex.splice(index, 1);
  return pokedex;
};

const pokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_POKEDEX:
      return { ...state, pokedex: [...state.pokedex, action.pokemon] };
    case SELECT_POKEMON:
      return { ...state, selectedPokemon: action.pokemon };
    case REMOVE_FROM_POKEDEX:
      return { pokedex: removeSpecificPokemon(state.pokedex, action.cardId) };
    default:
      return state;
  }
};

export default pokedexReducer;
