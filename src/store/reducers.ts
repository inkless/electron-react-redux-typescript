import { RouterState } from 'connected-react-router';
import { StateType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { counterReducer } from '@src/containers/Counter/reducers';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = StateType<typeof rootReducer> & { router: RouterState };
