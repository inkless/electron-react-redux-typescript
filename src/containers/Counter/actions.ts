import { Action, ActionCreator } from 'redux';
import { INCREMENT, DECREMENT } from './constants';

export interface IncrementAction extends Action {
  type: INCREMENT;
}
export interface DecrementAction extends Action {
  type: DECREMENT;
}

export const increment: ActionCreator<IncrementAction> = () => ({
  type: INCREMENT
});

export const decrement: ActionCreator<DecrementAction> = () => ({
  type: DECREMENT
});

export type CounterAction = IncrementAction | DecrementAction;
