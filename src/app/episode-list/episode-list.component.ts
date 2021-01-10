import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  array = [];
  constructor(private episodes: EpisodesService) {}

  ngOnInit() {
    this.episodes.getEpisodes().subscribe((data: any) => {
      this.array = data.episodes;
    });
  }
}
