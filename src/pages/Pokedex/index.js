import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokedexCard from '../../components/PokedexCard';
// import logo from '../../logo.svg';
import '../../App.css';

export default function Pokedex() {
  const { pokedex } = useSelector((state) => state.pokedexReducer);

  return (
    <div className="App">
      <h2>Pokedex</h2>
      {pokedex.map((pokeObj) => <PokedexCard pokemonInfo={pokeObj} />)}
    </div>
  );
}
