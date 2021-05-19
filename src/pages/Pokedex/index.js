import React from 'react';
import { useSelector } from 'react-redux';
import PokedexCard from '../../components/PokedexCard';
import './Pokedex.css';

export default function Pokedex() {
  const { pokedex } = useSelector((state) => state.pokedexReducer);

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Click on a pokemon's name to see more details</h2>
      <h3>Click on its type to see ALL POKEMONS of the same type (its a huge list!)</h3>
      <div className="pokedex-main">
        {pokedex.map((pokeObj, index) => <PokedexCard style={{ margin: '0 5px' }} key={`PokeDexCard_${pokeObj.id}_${index}`} pokemonInfo={pokeObj} cardId={index} />)}
      </div>
    </div>
  );
}
