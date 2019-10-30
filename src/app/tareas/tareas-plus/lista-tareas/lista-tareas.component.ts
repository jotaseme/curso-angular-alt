import { Component, OnInit } from '@angular/core';
import { TareasModel } from 'src/app/models/tareas.model';
import { LocalStoreService } from 'src/app/services/local-store.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { AddTarea } from 'src/app/reducers/tareas.actions';

@Component({
  selector: 'alt-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  storeKey: string;
  aTareas: Array<TareasModel>;
  constructor(
    private localStorage: LocalStoreService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.storeKey = 'Tareas';
    this.aTareas = this.localStorage.getItem(this.storeKey);
  }

  onAddTarea = (newTarea: TareasModel) => {
    this.aTareas.push(newTarea);
    this.actualizarStore();
    this.store.dispatch(new AddTarea(newTarea));
  }

  onDeleteTarea = (index: number) => {
    this.aTareas.splice(index, 1);
    this.actualizarStore();
  }

  onEditTarea = (index: number) => {
    this.aTareas[index].isCompleted = !this.aTareas[index].isCompleted;
    this.actualizarStore();
  }

  actualizarStore = () => this.localStorage.setItem(this.storeKey, this.aTareas);
}
