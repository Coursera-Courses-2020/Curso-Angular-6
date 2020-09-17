import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Club } from './../modelos/club';

@Component({
  selector: 'app-club-de-futbol',
  templateUrl: './club-de-futbol.component.html',
  styleUrls: ['./club-de-futbol.component.css']
})
export class ClubDeFutbolComponent implements OnInit {
  @Input() club: Club;
  @HostBinding('attr.class') cssClass = 'col-md-6'
  constructor() { }

  ngOnInit() {
  }

}
