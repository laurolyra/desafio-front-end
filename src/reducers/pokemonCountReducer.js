import { INCREMENT_POKEMON, DECREMENT_POKEMON } from '../actions/pokemonCountActions';

const initialState = {
  pokemon: 1,
};

const pokemonCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_POKEMON:
      return { pokemon: state.pokemon + 1 };
    case DECREMENT_POKEMON:
      return { pokemon: state.pokemon - 1 };
    default:
      return state;
  }
};

export default pokemonCountReducer;
