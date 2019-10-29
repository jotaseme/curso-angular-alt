import { CounterActions, CounterActionTypes } from './counter.actions';



export const counterFeatureKey = 'counter';

export function counterReducer(state = 0, action: CounterActions): number {
  switch (action.type) {
    case CounterActionTypes.Increment:
      state += 1;
      return state;
    case CounterActionTypes.Decrement:
      state -= 1;
      return state;
    case CounterActionTypes.Plus:
      state += action.payload;
      return state;
    case CounterActionTypes.Reset:
      state = 0;
      return state;
    default:
      return state;
  }
}
