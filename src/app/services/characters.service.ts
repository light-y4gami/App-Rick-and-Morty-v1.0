import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  URL = `https://rickandmortyapi.com/api/character`;

  constructor(private http: HttpClient) { 

  }

  getData() {
    return this.http.get(this.URL);
  }

  postData(data: any) {
    return this.http.post(this.URL, data);
  }
}
