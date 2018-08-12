import { Reducer } from 'redux';
import { getType } from 'typesafe-actions';
import { CounterAction, increment, decrement } from './actions';

export type CounterState = Readonly<{
  value: number;
}>;

const defaultState: CounterState = {
  value: 0,
};

export const counterReducer: Reducer<CounterState> = (
  state = defaultState,
  action: CounterAction,
) => {
  switch (action.type) {
    case getType(increment):
      return {
        ...state,
        value: state.value + 1,
      };
    case getType(decrement):
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
