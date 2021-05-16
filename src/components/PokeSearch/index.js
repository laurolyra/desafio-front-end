import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../App.css';
import { searchByName, searchByNumber } from '../../actions/findPokemonActions';
import PokemonCard from '../PokemonCard';

export default function PokeSearch() {
  const { pokemons } = useSelector((state) => state.listPokemonReducer);
  const { foundPokemon } = useSelector((state) => state.findPokemonReducer);
  const [pokeCriteria, setPokeCriteria] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();

  const searchPokemon = () => {
    const onlyNumbers = /^\d+$/.test(pokeCriteria);
    return onlyNumbers
      ? dispatch(searchByNumber(pokemons, pokeCriteria))
      : dispatch(searchByName(pokemons, pokeCriteria));
  };

  useEffect(() => {
    if (!foundPokemon) { setErrorMessage(true); } else { setErrorMessage(false); }
  }, [foundPokemon]);

  return (
    <div className="App">
      <h3>All right! Please, type a pokemon name or its id and I can show it to you!</h3>
      <input type="text" value={pokeCriteria} onChange={(e) => setPokeCriteria(e.target.value)} placeholder="Enter Id or name" />
      <button type="button" onClick={() => searchPokemon()}> Search!</button>
      {foundPokemon && <PokemonCard pokemon={foundPokemon} />}
      {errorMessage && <h2>No pokemon found. Please, search again</h2>}
    </div>
  );
}
