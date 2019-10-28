import { Action } from 'interfaces';

export const INCREMENT: Action = {
  type: 'Increment'
};

export const DECREMENT: Action = {
  type: 'Decrement'
};

export const PLUS: Action = {
  type: 'Plus',
  payload: 10
};
