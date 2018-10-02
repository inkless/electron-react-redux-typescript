import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { theme, ThemeProvider } from '@src/styled-components';
import App from './App';
import store, { history } from '../store';

// Render App
const render = (App: () => JSX.Element) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
  module.hot.accept('./App', () => {
    import('./App').then(App => {
      render(App.default);
    });
  });
}
