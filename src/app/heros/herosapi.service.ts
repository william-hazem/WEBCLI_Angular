import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Hero } from './heros';

@Injectable({
  providedIn: 'root'
})
export class HerosapiService {

  private readonly API = 'https://williamh.epizy.com/REST/';
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Hero[]>(this.API, {
      params: {'getdata': 1},
      //withCredentials: true 
    })
      .pipe(
        tap(console.log)
      );
  }
}
