import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import { rootReducer } from './reducers';
import history from './history';

function configureStore(initialState = {}) {
  const middlewares: any[] = [thunk, routerMiddleware(history)];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(connectRouter(history)(rootReducer), initialState, enhancer);
}

const store = configureStore();

if (typeof module.hot !== 'undefined') {
  module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').rootReducer));
}

export default store;
