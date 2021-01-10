import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeDetailsService } from '../episode-details.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent implements OnInit {
  episodeDetails: any = {};
  routeSub: any;
  id = '';
  constructor(
    private route: ActivatedRoute,
    private episodes: EpisodeDetailsService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['episodeId'];
    });

    this.episodes.getEpisodeDetails(this.id).subscribe((data: any) => {
      this.episodeDetails = data.episode;
    });
  }
}
