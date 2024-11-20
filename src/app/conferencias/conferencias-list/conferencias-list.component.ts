import { Component, OnInit } from '@angular/core';
import { Conferencias } from './conferencias';

@Component({
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {

  conferencias: Array<Conferencias> =[]

  constructor() { }

  getConferenciasList(): Array<Conferencias> {
    return this.conferencias;
  }

  ngOnInit() {
  }

}
