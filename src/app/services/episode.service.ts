import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  URL = `https://rickandmortyapi.com/api/episode`;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.URL);
  }

  postData(data: any) {
    return this.http.post(this.URL, data);
  }
}
