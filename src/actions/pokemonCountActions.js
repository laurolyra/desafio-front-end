export const INCREMENT_POKEMON = 'INCREMENT_POKEMON';
export const DECREMENT_POKEMON = 'DECREMENT_POKEMON';

export const incrementPokemon = () => (
  { type: INCREMENT_POKEMON }
);

export const decrementPokemon = () => (
  { type: DECREMENT_POKEMON }
);
