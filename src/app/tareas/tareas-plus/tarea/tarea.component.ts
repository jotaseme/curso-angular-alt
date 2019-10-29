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
  @Output() edit: EventEmitter<number>;

  constructor() {
    this.delete = new EventEmitter();
    this.edit = new EventEmitter();
   }

  ngOnInit() {
  }

  onDelete = () => this.delete.next(this.index);
  onChange = () => this.edit.next(this.index);
}
