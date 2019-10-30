import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { TareasModel } from '../models/tareas.model';
import { tareasReducer } from './tareas.reducer';

export interface AppState {
  counter: number;
  tareas: Array<TareasModel>;

}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  tareas: tareasReducer,
};

