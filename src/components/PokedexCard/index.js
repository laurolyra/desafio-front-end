import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PokemonAllInfo from '../PokemonAllInfo';

import { removeFromPokedex } from '../../actions/pokedexActions';

export default function PokedexCard({ pokemonInfo }) {
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useDispatch();
  const [customImage, setCustomImage] = useState([]);
  const hiddenFileInput = useRef(null);

  const handleImage = (e) => {
    setCustomImage(URL.createObjectURL(e.target.files[0]));
  };

  const showImage = () => {
    const correctDiv = customImage.length > 0
      ? <img alt={`${pokemonInfo.name}_card`} src={customImage} style={{ maxWidth: '95.99px', maxHeight: '95.99px' }} />
      : <img alt={`${pokemonInfo.name}_card`} src={`${pokemonInfo.sprites.front_default}`} style={{ maxWidth: '95.99px', maxHeight: '95.99px' }} />;
    return correctDiv;
  };

  return (
    <div>
      <h3 onClick={() => setShowInfo(true)}>{pokemonInfo.name}</h3>
      <div className="card-top">
        {showImage()}
        <button onClick={() => hiddenFileInput.current.click()}>Upload File</button>
        <input ref={hiddenFileInput} type="file" id="file-input" onChange={(e) => handleImage(e)} style={{ display: 'none' }} />
        <button type="button" disabled={customImage.length === 0} onClick={() => setCustomImage([])}>Remove custom Image</button>
        <button type="button" onClick={() => dispatch(removeFromPokedex(pokemonInfo.id))}>Remove from pokedex</button>
        <button type="button" onClick={() => setShowInfo(false)}>Close</button>
      </div>
      {showInfo ? <PokemonAllInfo key={`info_${pokemonInfo.id}`} selected={pokemonInfo} /> : null}
      <hr />
    </div>
  );
}
