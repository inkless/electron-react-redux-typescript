import { CounterAction } from 'containers/Counter/actions';

export type RootActions = CounterAction[keyof CounterAction];
