import { LIST_POKEMON_URL, LIST_POKEMON_END, ERROR_POKEMON_URL, } from '../actions/listFilterPokemonActions';

const initialState = {
  pokemons: [],
  error: '',
  listing: false,
};

const listFilterPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_POKEMON_URL:
      return { ...state, pokemons: [...state.pokemons, action.data], listing: true };
    case LIST_POKEMON_END:
      return { ...state, listing: false };
    case ERROR_POKEMON_URL:
      return { error: action.data, listing: false };
    default:
      return state;
  }
};

export default listFilterPokemonReducer;
