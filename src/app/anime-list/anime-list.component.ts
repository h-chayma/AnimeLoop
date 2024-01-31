import { Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent {
  animeList: any;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimeList().subscribe((data) => {
      this.animeList = data;
    });
  }
}
