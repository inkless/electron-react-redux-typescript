import { ActionType, createStandardAction } from 'typesafe-actions';

const INCREMENT = '@@Counter/INCREMENT';
const DECREMENT = '@@Counter/DECREMENT';

export const increment = createStandardAction(INCREMENT)();
export const decrement = createStandardAction(DECREMENT)();

export type CounterAction = ActionType<typeof increment> | ActionType<typeof decrement>;
