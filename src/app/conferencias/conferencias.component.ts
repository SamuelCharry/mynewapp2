import { Component, OnInit } from '@angular/core';
import { Conferencias } from './conferencias-list/conferencias';
@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {
  conferencias: Array<Conferencias> =[]
  constructor() { }

  getConferenciasList(): Array<Conferencias> {
    return this.conferencias;
  }

  ngOnInit() {
  }

}
