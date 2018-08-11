import { CounterAction } from '@src/containers/Counter/actions';

export type RootActions = CounterAction[keyof CounterAction];
