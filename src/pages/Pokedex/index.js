import React, { useEffect } from 'react';
// import logo from '../../logo.svg';
import '../../App.css';

export default function Pokedex() {
  useEffect(() => {
    console.log('pokedex');
  }, []);
  return (
    <div className="App">
      <h2>Pokedex</h2>
    </div>
  );
}
