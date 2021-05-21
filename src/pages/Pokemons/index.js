import React from 'react';
import { useSelector } from 'react-redux';
import PokeSearch from '../../components/PokeSearch';
import './Pokemons.css';

export default function Pokemons() {
  const { error, pokemons, listing } = useSelector((state) => state.listPokemonReducer);

  return (
    <div>
      <h2>Gotta Catch 'em All!</h2>
      {listing && <div>Loading pokemons info. Please wait...</div>}
      {error && <div>Failed to load pokemons. Try again later!</div>}
      {(!listing && pokemons.length > 0)
        && <PokeSearch />}
    </div>
  );
}
