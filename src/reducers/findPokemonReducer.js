import { SEARCH_BY_NAME, SEARCH_BY_NUMBER } from '../actions/findPokemonActions';

const initialState = {
  foundPokemon: {},
};

const listPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_NUMBER:
      return { foundPokemon: action.pokemons.find((obj) => obj.url.split('/')[6] === `${action.input}`) };
    case SEARCH_BY_NAME:
      return { foundPokemon: action.pokemons.find((obj) => obj.name === `${action.input.toLowerCase()}`) };
    default:
      return state;
  }
};

export default listPokemonReducer;
