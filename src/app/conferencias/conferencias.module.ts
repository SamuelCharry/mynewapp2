import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasComponent } from './conferencias.component';
import { ConferenciasListComponent } from './conferencias-list/conferencias-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConferenciasListComponent],
  exports: [ConferenciasListComponent]
})
export class ConferenciasModule { }
