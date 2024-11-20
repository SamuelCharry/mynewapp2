import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasListComponent } from './conferencias-list/conferencias-list.component';
import { ConferenciaDetailComponent } from './conferencia-detail/conferencia-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConferenciasListComponent,ConferenciaDetailComponent],
  exports: [ConferenciasListComponent]
})
export class ConferenciasModule { }
