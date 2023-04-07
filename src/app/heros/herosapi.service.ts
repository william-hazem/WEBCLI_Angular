import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Hero } from './heros';

@Injectable({
  providedIn: 'root'
})
export class HerosapiService {

  private readonly API = environment.apiUrl;
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Hero[]>(this.API, {
      params: {'getdata': 1},
      withCredentials: false 
    })
      .pipe(
        tap(console.log)
      );
  }
}
