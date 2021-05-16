import React from 'react';

export default function PokemonCard({ pokemon }) {
  return (
    <div>
      {Object.keys(pokemon)
        .map((key) => key !== 'id' && (
          <div key={`${pokemon.name}_${pokemon.key}`}>
            {key}
            : 
            { pokemon[key] }
          </div>
        ))}
    </div>
  );
}
