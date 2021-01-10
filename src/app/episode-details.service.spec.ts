import { TestBed } from '@angular/core/testing';

import { EpisodeDetailsService } from './episode-details.service';

describe('EpisodeDetailsService', () => {
  let service: EpisodeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
