import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People, Person } from '../models/people-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwServiceService {

  constructor(private swPeople: HttpClient) {

  }

  getPersonajesLis(): Observable<People> {
    return this.swPeople.get<People>('https://swapi.dev/api/people');

  }

}
