import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export interface AppState {
  counter: number;

}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};

