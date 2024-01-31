import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  characterDetails: any;
  characterId: string = '';
  showFullAbout: boolean = false;

  constructor(private animeService: AnimeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.characterId = params['id'];

      this.animeService.getCharacterById(this.characterId).subscribe((data) => {
        this.characterDetails = data;
      });
    });
  }

  formatAboutText(): string {
    return this.showFullAbout
      ? this.characterDetails.data.about.replace(/\n/g, '<br>')
      : this.characterDetails.data.about.replace(/\n/g, '<br>').slice(0, 500) + '...';
  }

  toggleShowMore(): void {
    this.showFullAbout = !this.showFullAbout;
  }

}
