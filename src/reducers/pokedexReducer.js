import { ADD_TO_POKEDEX } from '../actions/pokedexActions';

const initialState = {
  pokedex: [],
};

const pokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_POKEDEX:
      return { ...state, pokedex: [...state.pokedex, action.pokemon] };
    default:
      return state;
  }
};

export default pokedexReducer;
