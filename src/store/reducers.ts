import { RouterState } from 'connected-react-router';
import { StateType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { counterReducer } from '@src/containers/Counter/reducers';
import { coinAddressReducer } from '@src/containers/CoinAddress/reducers';
import { InitializerReducer } from '@src/containers/Initializer/reducers';

export const rootReducer = combineReducers({
  counter: counterReducer,
  coinAddress: coinAddressReducer,
  initializer: InitializerReducer,
});

export type RootState = StateType<typeof rootReducer> & { router: RouterState };
