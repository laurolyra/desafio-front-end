import React from 'react';
import { useSelector } from 'react-redux';
import PokedexCard from '../../components/PokedexCard';

export default function Pokedex() {
  const { pokedex } = useSelector((state) => state.pokedexReducer);

  return (
    <div>
      <h2>Pokedex</h2>
      <div className="pokedex-main" style={{ margin: '0 -5px', display: 'flex', justifyContent: 'space-around' }}>
        {pokedex.map((pokeObj, index) => <PokedexCard style={{ margin: '0 5px' }} key={`PokeDexCard_${pokeObj.id}_${index}`} pokemonInfo={pokeObj} cardId={index} />)}
      </div>
    </div>
  );
}
