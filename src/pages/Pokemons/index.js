import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPokemon, decrementPokemon } from '../../actions/pokemonCountActions';
import '../../App.css';
import PokemonCard from '../../components/PokemonCard';

export default function Pokemons() {
  const { error, pokemons, listing} = useSelector((state) => state.listFilterPokemonReducer);

  return (
    <div className="App">
      <h2>Pokemons</h2>
      {listing && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {(!listing && pokemons) && <div>{pokemons[0]?.name}</div>}
    </div>
  );
}
