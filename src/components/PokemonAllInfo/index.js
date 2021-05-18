import React, { useState, useEffect } from 'react';

export default function PokemonAllInfo({ selected }) {
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [errorDetails, setErrorDetails] = useState(false);
  const [errorEvolution, setErrorEvolution] = useState(false);
  const [selectedAbility, setSelectedAbility] = useState('');
  const [selectedType, setSelectedType] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);

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

  const fetchType = (url) => {
    setErrorDetails(false);
    setLoadingInfo(true);
    fetch(url)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then(
            (res) => setSelectedType(res),
            () => setErrorDetails(true),
          )
      ));
    setLoadingInfo(false);
  };

  const buildEvoChain = (chain) => {
    // source: https://stackoverflow.com/questions/39112862/pokeapi-angular-how-to-get-pokemons-evolution-chain
    let evoChain = [];
    let evoData = chain.chain;

    do {
      let numberOfEvolutions = evoData.evolves_to.length;

      evoChain.push({
        species_name: evoData.species.name,
        min_level: !evoData ? 1 : evoData.min_level,
        trigger_name: !evoData ? null : evoData.trigger?.name,
        item: !evoData ? null : evoData.item
      });

      if (numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i++) {
          evoChain.push({
            species_name: evoData.evolves_to[i].species.name,
            min_level: !evoData.evolves_to[i] ? 1 : evoData.evolves_to[i].min_level,
            trigger_name: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].trigger?.name,
            item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item
          });
        }
      }

      evoData = evoData.evolves_to[0];
    } while (evoData !== undefined && evoData.hasOwnProperty('evolves_to'));
    return evoChain.length > 1 && setEvolutionChain(evoChain);
  };

  const fetchEvolutionChain = (url) => {
    setErrorDetails(false);
    setLoadingInfo(true);
    fetch(url)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then(
            (res) => buildEvoChain(res),
            () => setErrorEvolution(true),
          )
      ));
    setLoadingInfo(false);
  };

  useEffect(() => {
    setErrorDetails(false);
    setLoadingInfo(true);
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${selected.id}`)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then(
            (res) => fetchEvolutionChain(res.evolution_chain.url),
            () => setErrorEvolution(true),
          )
      ));
    setLoadingInfo(false);
  }, []);

  const showStats = (key) => {
    const stats = selected.stats.filter(({ stat }) => stat.name === key);
    return stats[0].base_stat;
  };

  return !loadingInfo ? (
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
        {selected.types
          .map(({ type }) =>
            <li key={type.name} onClick={() => fetchType(type.url)}>{type.name}</li>)}
      </ul>
      {evolutionChain && (
        <div>
          Evolution Chain:&nbsp;
          {evolutionChain.map(({ species_name }) => <li key={`evolution_${species_name}`}>{species_name}</li>)}
        </div>
      )}
      {errorEvolution && (
        <div>Failed to load evolution chain. please close this card and open it again.</div>
      )}
      {selectedType && (
        <div>
          Pokemons of the same type:
          {selectedType.pokemon.map((obj) => <li key={`similar${obj.pokemon.name}`}>{obj.pokemon.name}</li>)}
        </div>
      )}
      <div className="Ability-block">
        <ul style={{ margin: '0' }}>
          Abilities:
          {selected.abilities
            .map(({ ability }) => (
              <li key={ability.url} onClick={() => selectAbility(ability.url)}>
                {ability.name}
              </li>
            ))}
        </ul>
        <div>{selectedAbility && <div>Ability details:{showShortEffect()}</div>}</div>
      </div>
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
      </div>
    </div>
  ) : <div>Loading...</div>;
};
