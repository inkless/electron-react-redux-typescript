import { RouterState } from 'connected-react-router';
import { Reducer, combineReducers } from 'redux';
import { CounterState, counterReducer } from 'containers/Counter/reducers';

export interface RootState {
  counter: CounterState;
  router: RouterState;
}

export const rootReducer = combineReducers({
  counter: counterReducer
});
