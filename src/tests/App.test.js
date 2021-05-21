import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render, screen, waitFor, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import pokemons from './pokeMock';

import store from '../store'
import PokeSearch from '../components/PokeSearch';


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
    waitFor(() =>expect(initialtext).toBeInTheDocument())
  });
});
