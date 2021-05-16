import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { listPokemonURL, errorPokemonURL, listPokemonEnd } from './actions/listPokemonActions';
import Pokemons from './pages/Pokemons';
import Pokedex from './pages/Pokedex';

export default function App() {
  const dispatch = useDispatch();
  const getPokemonsURLs = (URL) => {
    fetch(URL)
      .then((response) => (
        response
          .json()
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
          .then(
            (res) => {
              const dispatchResults = res.results
                .forEach((arrPokemon) => dispatch(listPokemonURL(arrPokemon)));
              const fetchNext = res.next ? getPokemonsURLs(res.next) : dispatch(listPokemonEnd());
              Promise.all([dispatchResults, fetchNext]);
            },
            (err) => dispatch(errorPokemonURL(err.message)),
          )
      ));
  };
  useEffect(() => {
    getPokemonsURLs('https://pokeapi.co/api/v2/pokemon/');
  }, []);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Pokemons</Link>
            </li>
            <li>
              <Link to="/pokedex">Pokedex</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/pokedex" render={() => <Pokedex />} />
          <Route path="/" render={() => <Pokemons />} />
        </Switch>
      </div>
    </Router>
  );
}
