import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private http: HttpClient) {}
  getEpisodes() {
    let url = 'http://stapi.co/api/v1/rest/episode/search';
    return this.http.get(url);
  }
}
