import { Action, Reducer, Store, createStore } from 'redux';

interface ActionPlus extends Action {
  payload: number;
}

export const INCREMENT: Action = { type: 'Increment' };
export const DECREMENT: Action = { type: 'Decrement' };
export const PLUS: ActionPlus = { type: 'Plus', payload: 10 };

const reducer: Reducer<number> = (oldState: number, action: Action | ActionPlus) => {
  switch (action.type) {
    case 'Increment':
      return ++oldState;
    case 'Decrement':
      return --oldState;
    case 'Plus':
      return oldState + (action as ActionPlus).payload;
    default:
      return oldState;
  }
};

const store: Store = createStore<number, Action|ActionPlus, null, null>(reducer, 0);

console.log('Estado inicial', store.getState());
store.dispatch(INCREMENT);
console.log('Estado tras increment', store.getState());
store.dispatch(DECREMENT);
console.log('Estado tras decrement', store.getState());
store.dispatch(PLUS);
console.log('Estado tras plus10', store.getState());

store.subscribe(() => console.log(store.getState()));

store.dispatch(INCREMENT);
store.dispatch(DECREMENT);
store.dispatch(PLUS);
