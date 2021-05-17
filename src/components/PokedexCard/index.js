import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonAllInfo from '../PokemonAllInfo';

import { removeFromPokedex, selectPokemon } from '../../actions/pokedexActions';

export default function PokedexCard({ pokemonInfo }) {
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useDispatch();

  return (
    <div key={`${pokemonInfo.name}`}>
      <h3 onClick={() => setShowInfo(true)}>{pokemonInfo.name}</h3>
      <img alt={`${pokemonInfo.name}_card`} src={`${pokemonInfo.sprites.front_default}`} onClick={() => setShowInfo(true)} />
      {showInfo ? <PokemonAllInfo selected={pokemonInfo} /> : null}
      <div>
        <button type="button" onClick={() => dispatch(removeFromPokedex(pokemonInfo.id))}>Remove from pokedex</button>
        <button type="button" onClick={() => setShowInfo(false)}>Close</button>
      </div>
      <hr />
    </div>
  );
}
