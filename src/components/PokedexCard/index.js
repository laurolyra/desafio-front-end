import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFromPokedex, selectPokemon } from '../../actions/pokedexActions';

export default function PokedexCard({ pokemonInfo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Link onClick={() => dispatch(selectPokemon(pokemonInfo))} key={`${pokemonInfo.name}_link`} to={`pokemon/${pokemonInfo.id}`}>
        <h3>{pokemonInfo.name}</h3>
        <img alt={`${pokemonInfo.name}_card`} src={`${pokemonInfo.sprites.front_default}`} />
      </Link>
      <button type="button" onClick={() => dispatch(removeFromPokedex(pokemonInfo.id))}>Remove from pokedex</button>
      <hr />
    </div>
  );
}
