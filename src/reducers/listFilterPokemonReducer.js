import { LIST_POKEMON_URL, ERROR_POKEMON_URL } from '../actions/listFilterPokemonActions';

const initialState = {
  pokemons: [],
  error: '',
};

const listFilterPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_POKEMON_URL:
      return { ...state, pokemons: [...state.pokemons, action.data] };
    case ERROR_POKEMON_URL:
      return { error: action.data };
    default:
      return state;
  }
};

export default listFilterPokemonReducer;
