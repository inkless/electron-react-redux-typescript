import { Reducer } from 'redux';
import { INCREMENT, DECREMENT } from './constants';
import { CounterAction } from './actions';

export interface CounterState {
  readonly value: number;
}

const defaultState: CounterState = {
  value: 0
};

export const counterReducer: Reducer<CounterState> = (
  state = defaultState,
  action: CounterAction
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};
