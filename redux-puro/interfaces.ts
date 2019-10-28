export interface Action {
  type: string;
  payload?: any;
}

export type Reducer<T> = (oldState: T, action: Action) => T;
