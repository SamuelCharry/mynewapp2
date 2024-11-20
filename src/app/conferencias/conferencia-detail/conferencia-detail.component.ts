import { Component, Input, OnInit } from '@angular/core';
import { Conferencias } from '../conferencias-list/conferencias';

@Component({
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  styleUrls: ['./conferencia-detail.component.css']
})
export class ConferenciaDetailComponent implements OnInit {

  @Input() coferenciaDetail!: Conferencias;
  constructor() { }

  ngOnInit() {
  }

}
