export const LIST_POKEMON_URL = 'LIST_POKEMON_URL';
export const LIST_POKEMON_END = 'LIST_POKEMON_END';
export const ERROR_POKEMON_URL = 'ERROR_POKEMON_URL';

export const listPokemonURL = (data) => (
  { type: LIST_POKEMON_URL, data }
);

export const listPokemonEnd = () => (
  { type: LIST_POKEMON_END }
);

export const errorPokemonURL = (data) => (
  { type: ERROR_POKEMON_URL, data }
);
