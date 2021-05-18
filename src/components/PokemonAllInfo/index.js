import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import logo from '../../logo.svg';

export default function PokemonAllInfo({ selected }) {
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [errorDetails, setErrorDetails] = useState(false);
  const [selectedAbility, setSelectedAbility] = useState('');

  const showShortEffect = () => {
    const divText = selectedAbility.effect_entries.map((move) => move.language.name === 'en' && <div key={`${move}_short-effect`}>{move.short_effect}</div>);
    return divText;
  };

  const selectAbility = (url) => {
    setErrorDetails(false);
    setLoadingInfo(true);
    fetch(url)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then(
            (res) => setSelectedAbility(res),
            () => setErrorDetails(true),
          )
      ));
    setLoadingInfo(false);
  };

  const showStats = (key) => {
    const stats = selected.stats.filter((stat) => stat.stat.name === key);
    return stats[0].base_stat;
  };

  return (
    <div>
      <div>
        Name:&nbsp;
        {selected.name}
      </div>
      <div>
        Weight:&nbsp;
        {selected.weight}
      </div>
      <div>
        Height(feet):&nbsp;
        {selected.height}
      </div>
      <ul>
        Types:&nbsp;
        {selected.types.map((obj) => <li>{obj.type.name}</li>)}
      </ul>
      {/* {loadingInfo && <div>Loading move info...</div>} */}
      <ul>
        Abilities:
        {selected.abilities
          .map((obj) => (
            <li key={obj.ability.url} onClick={() => selectAbility(obj.ability.url)}>
              {obj.ability.name}
            </li>
          ))}
      </ul>
      {selectedAbility && showShortEffect()}
      <div>
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
