import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareasModel } from 'src/app/models/tareas.model';

@Component({
  selector: 'alt-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: TareasModel;
  @Input() index: number;
  @Output() delete: EventEmitter<number>;

  constructor() {
    this.delete = new EventEmitter();
   }

  ngOnInit() {
  }

  onDelete = () => this.delete.next(this.index);
}
