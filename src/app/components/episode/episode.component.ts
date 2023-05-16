import { Component, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  data: any[] = [];

  constructor(private service: EpisodeService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((response: any) => {
      this.data = response.results;
    });
  }
}
