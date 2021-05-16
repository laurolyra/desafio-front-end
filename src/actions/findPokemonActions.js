export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const SEARCH_BY_NUMBER = 'SEARCH_BY_NUMBER';

export const searchByName = (pokemons, input) => (
  { type: SEARCH_BY_NAME, pokemons, input }
);

export const searchByNumber = (pokemons, input) => (
  { type: SEARCH_BY_NUMBER, pokemons, input }
);
