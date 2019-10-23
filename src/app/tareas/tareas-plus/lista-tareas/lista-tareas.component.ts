import { Component, OnInit } from '@angular/core';
import { TareasModel } from 'src/app/models/tareas.model';

@Component({
  selector: 'alt-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  aTareas: Array<TareasModel>;
  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  onAddTarea = (newTarea: TareasModel) => {
    this.aTareas.push(newTarea);
  }

  onDeleteTarea = (index: number) => this.aTareas.splice(index, 1);

}
