/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ConferenciasServiceService } from './conferenciasService.service';

describe('Service: ConferenciasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConferenciasServiceService]
    });
  });

  it('should ...', inject([ConferenciasServiceService], (service: ConferenciasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
