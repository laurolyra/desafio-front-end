import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPokemon, decrementPokemon } from '../../actions/pokemonCountActions';
// import logo from '../../logo.svg';
import '../../App.css';
import PokemonCard from '../../components/PokemonCard';

export default function Pokemons() {
  const [pokemonsFromAPI, setPokemonsFromAPI] = useState([]);
  const dispatch = useDispatch();
  const item = useSelector((state) => state.pokemon);

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
  console.log('item', item);
  return (
    <div className="App">
      <h2>Pokemons</h2>
      <button type="button" onClick={() => dispatch(decrementPokemon())}>previous</button>
      <h2>current:</h2>
      <h2>
        {item}
      </h2>
      <button type="button" onClick={() => dispatch(incrementPokemon())}>next</button>
      {pokemonsFromAPI.map((pokemon) => <PokemonCard key={`${pokemon.name}`} pokemon={pokemon} />)}
    </div>
  );
}
