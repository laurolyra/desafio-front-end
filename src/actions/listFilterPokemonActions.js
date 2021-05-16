export const LIST_POKEMON_URL = 'LIST_POKEMON_URL';
export const ERROR_POKEMON_URL = 'ERROR_POKEMON_URL';

export const listPokemonURL = (data) => (
  { type: LIST_POKEMON_URL, data }
);

export const errorPokemonURL = (data) => (
  { type: ERROR_POKEMON_URL, data }
);
