import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchByName, searchByNumber } from '../../actions/findPokemonActions';
import PokemonCard from '../PokemonCard';
import './PokeSearch.css';

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
    <div>
      <h3>All right! Please, type a pokemon name or its id and I can show it to you!</h3>
      <div className="poke-input-button">
        <input type="text" data-testid="pokemon-input-search" value={pokeCriteria} onChange={(e) => setPokeCriteria(e.target.value)} placeholder="Enter Id or name" />
        <button type="button" data-testid="search-pokemon" onClick={() => searchPokemon()}> Search!</button>
      </div>
      {foundPokemon && <PokemonCard pokemon={foundPokemon} />}
      {errorMessage && <h2>No pokemon found. Please, search again</h2>}
    </div>
  );
}
