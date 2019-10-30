import { Action } from '@ngrx/store';
import { TareasModel } from '../models/tareas.model';

export enum TareasActionTypes {
  AddTarea = '[Tareas] Add Tareas '
}

export class AddTarea implements Action {
  readonly type = TareasActionTypes.AddTarea;

  constructor(public payload: TareasModel) {}
}

export type TareasActions = AddTarea;
