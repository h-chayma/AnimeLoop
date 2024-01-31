import { Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  characters: any;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getCharactersList().subscribe((data) => {
      this.characters = data;
    });
  }
}
