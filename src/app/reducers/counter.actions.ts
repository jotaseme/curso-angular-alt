import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Plus = '[Counter] Plus',
  Reset = '[Counter] RESET',
}

export class Increment implements Action {
  readonly type = CounterActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrement;
}

export class Plus implements Action {
  readonly type = CounterActionTypes.Plus;

  constructor(public payload: number) {}
}

export class Reset implements Action {
  readonly type = CounterActionTypes.Reset;
}

export type CounterActions = Increment | Decrement | Plus | Reset;
