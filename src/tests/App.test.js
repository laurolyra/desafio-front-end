import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import { render, screen, waitFor, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import {pokemons} from './pokeMock';

import store from '../store'
import PokeSearch from '../components/PokeSearch';
import PokemonCard from '../components/PokemonCard';


describe ('test for App container', () => {
  it('should render some text on render', () => {
    render (
      <Provider store ={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const initialtext = screen.getByText("Gotta Catch 'em All!");
    waitFor(() =>expect(initialtext).toBeInTheDocument())
  });
  it('should render ok text after loading pokemons', () => {
    jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve({
        Pokemons: [...pokemons],
      }),
    }));
    render (
      <Provider store ={store}>
        <MemoryRouter initialEntries={['/']}>
          <PokeSearch />
        </MemoryRouter>
      </Provider>
    )

    const initialtext = screen.getByText("All right! Please, type a pokemon name or its id and I can show it to you!");
    waitFor(() =>expect(initialtext).toBeInTheDocument());
  });
  it('show bulbasaur', () => {
    jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve({
        Pokemons: [...pokemons],
      }),
    }));
    render (
      <Provider store ={store}>
        <MemoryRouter initialEntries={['/']}>
          <PokeSearch/>
        </MemoryRouter>
      </Provider>
    )

    const inputText = screen.getByTestId('pokemon-input-search');
    const Button = screen.getByTestId('search-pokemon');

    fireEvent.change(inputText, { target: { value: '1' } });
    fireEvent.click(Button);

    const bulbasaur = screen.queryByText('bulbasaur');
    waitFor(() => expect(bulbasaur).toBeInTheDocument())
// colocar em outro teste
    const notFound = 'No pokemon found. Please, search again';

    fireEvent.change(inputText, { target: { value: '150' } });
    fireEvent.click(Button);

    waitFor(() => expect(notFound).toBeInTheDocument());

  });
});

describe('pokedex testing', () => {
  it('add to pokedex', () => {
    const history = createMemoryHistory();
    const mockFetch = jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve({
        Pokemons: [...pokemons],
      }),
    }));

    render (
      <Provider store ={store}>
        <MemoryRouter initialEntries={['/']}>
          <PokemonCard pokemon={pokemons[1]}/>
        </MemoryRouter>
      </Provider>
    )

    const addToPokedex = screen.getByTestId('add-to-pokedex');

    fireEvent.click(addToPokedex);
    fireEvent.click(addToPokedex);

    history.push('/pokedex');

    const ivysaur = screen.queryByText('ivysaur');
    waitFor(() => expect(ivysaur).toBeInTheDocument())
  });
})
