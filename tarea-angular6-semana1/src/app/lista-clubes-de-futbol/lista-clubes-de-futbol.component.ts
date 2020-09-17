import { Component, OnInit } from '@angular/core';
import { Club } from './../modelos/club';


@Component({
  selector: 'app-lista-clubes-de-futbol',
  templateUrl: './lista-clubes-de-futbol.component.html',
  styleUrls: ['./lista-clubes-de-futbol.component.css']
})
export class ListaClubesDeFutbolComponent implements OnInit {
  clubes: Club[];
  constructor() {
    this.clubes = [new Club("Boca", "La Boca")];
  }

  ngOnInit() {
  }

  guardar(nombre: string, barrio: string): boolean {
    this.clubes.push(new Club(nombre, barrio));
    return false;
  }

}
