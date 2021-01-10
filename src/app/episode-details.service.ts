import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EpisodeDetailsService {
  constructor(private http: HttpClient) {}
  getEpisodeDetails(episodeId: string) {
    let url = `http://stapi.co/api/v1/rest/episode?uid=${episodeId}`;
    return this.http.get(url);
  }
}
