import React from 'react';
import { useSelector } from 'react-redux';
import PokedexCard from '../../components/PokedexCard';

export default function Pokedex() {
  const { pokedex } = useSelector((state) => state.pokedexReducer);

  return (
    <div>
      <h2>Pokedex</h2>
      {pokedex.map((pokeObj) => <PokedexCard key={`PokeDexCard_${pokeObj.id}`} pokemonInfo={pokeObj} />)}
    </div>
  );
}
