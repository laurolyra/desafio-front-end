import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// import logo from './logo.svg';
import Pokemons from './pages/Pokemons';
import Pokedex from './pages/Pokedex';

export default function App() {
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
