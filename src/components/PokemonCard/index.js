import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
export default function PokemonCard({ pokemon }) {
  const [pokeDetails, setPokeDetails] = useState([]);
  const [errorDetails, setErrorDetails] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    setErrorDetails(false);
    fetch(pokemon.url)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then(
            (res) => setPokeDetails(res),
            () => setErrorDetails(true),
          )
      ));
  }, [pokemon]);
  return (
    Object.entries(pokemon).length > 0 && (
      <div>
        <h1>
          {pokemon.name}
        </h1>
        <div>
          {pokeDetails.sprites && <img alt={`${pokemon.name}_image`} src={pokeDetails.sprites.front_default} />}
        </div>
        {errorDetails ? <div>Failed to find more information. please try again.</div> : <button type="button" onClick={() => console.log(pokeDetails)}>Add to PokeDéx</button>}
      </div>
    )
  );
}
