import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokedexCard from '../../components/PokedexCard';
// import logo from '../../logo.svg';

export default function Pokedex() {
  const { pokedex } = useSelector((state) => state.pokedexReducer);

  return (
    <div>
      <h2>Pokedex</h2>
      {pokedex.map((pokeObj) => <PokedexCard pokemonInfo={pokeObj} />)}
    </div>
  );
}
