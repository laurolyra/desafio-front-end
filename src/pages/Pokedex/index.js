import React from 'react';
import { useSelector } from 'react-redux';
import PokedexCard from '../../components/PokedexCard';

export default function Pokedex() {
  const { pokedex } = useSelector((state) => state.pokedexReducer);

  return (
    <div>
      <h2>Pokedex</h2>
      <div className="pokedex-main" style={{ margin: '0 -5px', display: 'flex', justifyContent: 'space-around' }}>
        {pokedex.map((pokeObj) => <PokedexCard style={{ margin: '0 5px' }} key={`PokeDexCard_${pokeObj.id}`} pokemonInfo={pokeObj} />)}
      </div>
    </div>
  );
}
