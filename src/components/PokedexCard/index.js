import React from 'react';

export default function PokedexCard({ pokemonInfo }) {
  return (
    <div>
      <img alt={`${pokemonInfo.name}_card`} src={`${pokemonInfo.sprites.front_default}`} />
    </div>
  );
}
