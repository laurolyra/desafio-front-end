import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import logo from '../../logo.svg';
import '../../App.css';

export default function PokemonAllInfo() {
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [errorDetails, setErrorDetails] = useState(false);
  const [selectedAbilities, setSelectedAbilities] = useState([]);

  const { selectedPokemon } = useSelector((state) => state.pokedexReducer);

  const handleAbilitie = (abilityURL) => {
    setErrorDetails(false);
    setLoadingInfo(true);
    fetch(abilityURL)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then(
            (res) => setSelectedAbilities(res),
            () => setErrorDetails(true),
          )
      ));
    setLoadingInfo(false);
  };

  const showShortEffect = (moveInfo) => moveInfo.effect_entries.map((move) => move.language.name === 'en' && <div key={`${move}_short-effect`}>{move.short_effect}</div>);

  const showStats = (key) => {
    const speedStats = selectedPokemon.stats.filter((stat) => stat.stat.name === key);
    return speedStats[0].base_stat;
  };

  return (
    <div className="App">
      <div>
        Name:&nbsp;
        {selectedPokemon.name}
      </div>
      <img alt={`${selectedPokemon.name}_card`} src={`${selectedPokemon.sprites.front_default}`} />
      <div>
        Weight:&nbsp;
        {selectedPokemon.weight}
      </div>
      <div>
        Height(feet):&nbsp;
        {selectedPokemon.height}
      </div>
      <ul>
        Types:&nbsp;
        {selectedPokemon.types.map((obj) => <li>{obj.type.name}</li>)}
      </ul>
      {loadingInfo && <div>Loading move info...</div>}
      <ul>
        Abilities:
        {selectedPokemon.abilities
          .map((obj) => (
            <li onClick={() => handleAbilitie(obj.ability.url)}>
              {obj.ability.name}
            </li>
          ))}
      </ul>
      <div>
        {selectedAbilities && showShortEffect(selectedAbilities)}
        {errorDetails && <div>failed to load Ability description. Please try again.</div>}
      </div>
      <div>
        Speed:&nbsp;
        {showStats('speed')}
      </div>
      <div>
        Defense:&nbsp;
        {showStats('defense')}
      </div>
      <div>
        Attack:&nbsp;
        {showStats('attack')}
      </div>
      <div>
        HP:&nbsp;
        {showStats('hp')}
      </div>
      <div>
        Evolution steps:
        {/* inserir aqui a requisição pra obter a informação das pŕoximas evoluções */}
      </div>
    </div>
  );
}
