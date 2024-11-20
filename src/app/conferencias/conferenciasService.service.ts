import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conferencias } from './conferencias-list/conferencias';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConferenciasServiceService {

    private apiUrl = environment.baseUrl + 'courses.json';
    constructor(private http: HttpClient) { }


    getCourses(): Observable<Conferencias[]> {
      return this.http.get<Conferencias[]>(this.apiUrl);
    }

}
