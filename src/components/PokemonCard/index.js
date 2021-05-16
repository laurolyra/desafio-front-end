import React from 'react';
// add link to pokemon. instead of just mmapping info.

// something like <Route render(() => <PokemonDetails />)>
export default function PokemonCard({ foundPokemon }) {
  return (
    <div>
      <h1>Name: {foundPokemon?.name}</h1>
    </div>
  );
}
