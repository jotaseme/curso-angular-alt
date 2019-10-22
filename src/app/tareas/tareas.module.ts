import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [TareasComponent, MenuComponent],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
