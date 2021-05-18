export const ADD_TO_POKEDEX = 'ADD_TO_POKEDEX';
export const SELECT_POKEMON = 'SELECT_POKEMON';
export const REMOVE_FROM_POKEDEX = 'REMOVE_FROM_POKEDEX';

export const addToPokedex = (pokemon) => (
  { type: ADD_TO_POKEDEX, pokemon }
);

export const selectPokemon = (pokemon) => (
  { type: SELECT_POKEMON, pokemon }
);

export const removeFromPokedex = (cardId) => (
  { type: REMOVE_FROM_POKEDEX, cardId }
);
