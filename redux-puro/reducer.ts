import { Reducer, Action } from 'interfaces';

export const reducer: Reducer<number> = (oldState: number, action: Action) => {
  switch (action.type) {
    case 'Increment':
      return ++oldState;
    case 'Decrement':
      return --oldState;
    case 'Plus':
      return oldState + action.payload;
    default:
      return oldState;
  }
};
