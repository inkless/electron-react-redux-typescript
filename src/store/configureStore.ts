import { combineReducers, compose, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import { rootReducer, RootState } from './reducers';
import history from './history';

export default function configureStore(initialState = {}) {
  const middlewares: any[] = [routerMiddleware(history)];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(connectRouter(history)(rootReducer), initialState, enhancer);
}
