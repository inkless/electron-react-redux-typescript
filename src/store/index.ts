import configureStore from './configureStore';

const store = configureStore();

if (typeof module.hot !== 'undefined') {
  module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').rootReducer));
}

export default store;
export { default as history } from './history';
