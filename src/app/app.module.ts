import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import { ShareModule } from './share/share.module';

registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    ShareModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
