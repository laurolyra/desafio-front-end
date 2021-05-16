import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPokemon, decrementPokemon } from '../../actions/pokemonCountActions';
import '../../App.css';
import PokemonCard from '../../components/PokemonCard';

export default function Pokemons() {
  const [errorFromAPI, setErrorFromAPI] = useState('');
  const dispatch = useDispatch();
  const pokeList = useSelector((state) => state.listFilterPokemonReducer.pokemons);
  const error = useSelector((state) => state.listFilterPokemonReducer.error);
  const pokemons = useSelector((state) => state.listFilterPokemonReducer.pokemons);

  return (
    <div className="App">
      <h2>Pokemons</h2>
      <button type="button" onClick={() => dispatch(decrementPokemon())}>previous</button>
      <h2>current:</h2>
      <h2>
        {/* {item} */}
      </h2>
      <button type="button" onClick={() => dispatch(incrementPokemon())}>next</button>
      {error
        ? <div>{error}</div>
        : <div>{pokemons[0]?.name}</div>}
    </div>
  );
}
