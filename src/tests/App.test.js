import React from 'react';
import { Provider } from 'react-redux';
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';
import pokemonStore from '../store';

describe('Test App', () => {
  function renderApp(store = pokemonStore(), props = {}) {
    return render(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );
  }

  test('Loading dummy page', async () => {
    renderApp();
    const welcomeMessage = screen.queryByText(/Gotta Catch 'em All!/i);
    const pokemonLink = screen.queryByText(/Pokemon/i);
    const pokedexLink = screen.queryByText(/Pokedex/i);
    await waitFor(() => expect(welcomeMessage).toBeInTheDocument());
    await waitFor(() => expect(pokemonLink).toBeInTheDocument());
    await waitFor(() => expect(pokedexLink).toBeInTheDocument());
  });
});