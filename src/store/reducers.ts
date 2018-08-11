import { RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';
import { CounterState, counterReducer } from '@src/containers/Counter/reducers';

export interface RootState {
  counter: CounterState;
  router: RouterState;
}

export const rootReducer = combineReducers({
  counter: counterReducer
});
