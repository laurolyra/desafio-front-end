import React, { useState, useEffect } from 'react';
// import logo from '../../logo.svg';
import '../../App.css';
import PokemonCard from '../../components/PokemonCard';

export default function Pokemons() {
  const [pokemonsFromAPI, setPokemonsFromAPI] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then(
            (res) => setPokemonsFromAPI(res.results),
            (err) => console.log('error', err),
          )
      ));
  }, []);
  return (
    <div className="App">
      <h2>Pokemons</h2>
      {pokemonsFromAPI.map((pokemon) => <PokemonCard index={`${pokemon.name}`} pokemon={pokemon} />)}
    </div>
  );
}
