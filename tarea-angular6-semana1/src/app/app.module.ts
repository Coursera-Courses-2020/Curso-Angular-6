import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaClubesDeFutbolComponent } from './lista-clubes-de-futbol/lista-clubes-de-futbol.component';
import { ClubDeFutbolComponent } from './club-de-futbol/club-de-futbol.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClubesDeFutbolComponent,
    ClubDeFutbolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
