import { TareasModel } from '../models/tareas.model';
import { TareasActions, TareasActionTypes } from './tareas.actions';


export const tareasFeatureKey = 'tareas';

export function tareasReducer(state = [], action: TareasActions): Array<TareasModel> {
  switch (action.type) {
    case TareasActionTypes.AddTarea:
      return [...state, action.payload];
    default:
      return state;
  }
}
