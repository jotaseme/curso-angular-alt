import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fecha: Date;
  constructor() { }

  ngOnInit() {
    this.fecha = new Date();
  }

}
