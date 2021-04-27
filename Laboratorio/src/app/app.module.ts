import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';

@NgModule({
  declarations: [
    AppComponent,
    LaboratorioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
