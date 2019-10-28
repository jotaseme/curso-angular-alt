import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alt-tareas-simple',
  templateUrl: './tareas-simple.component.html',
  styleUrls: ['./tareas-simple.component.css']
})
export class TareasSimpleComponent implements OnInit {
  texto: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tempora amet et, saepe possimus, in asperiores iusto provident, quibusdam eius obcaecati consequatur facere impedit fugiat culpa voluptatum incidunt. Quaerat, harum.';
  constructor() { }

  ngOnInit() {
  }

}
