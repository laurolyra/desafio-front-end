import React from 'react';
// add link to pokemon. instead of just mmapping info.

// something like <Route render(() => <PokemonDetails />)>
export default function PokemonCard({ pokemon }) {
  return (
    <div>
      {Object.keys(pokemon)
        .map((key) => (
          <div>
            {key}
            :
            { pokemon[key] }
          </div>
        ))}
    </div>
  );
}
