import React from 'react';
import { useSelector } from 'react-redux';
import PokeSearch from '../../components/PokeSearch';
import '../../App.css';

export default function Pokemons() {
  const { error, pokemons, listing } = useSelector((state) => state.listPokemonReducer);

  return (
    <div className="App">
      <h2>Pokemons</h2>
      {listing && <div>Loading pokemons info. Please wait...</div>}
      {error && <div>{error}</div>}
      {(!listing && pokemons)
        && <PokeSearch />}
    </div>
  );
}
