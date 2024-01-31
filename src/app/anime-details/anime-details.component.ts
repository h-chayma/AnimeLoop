import { Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrl: './anime-details.component.css'
})
export class AnimeDetailsComponent {
  animeDetails: any;
  animeId: string = '';

  constructor(private animeService: AnimeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initAnimeLoop();
    this.route.params.subscribe((params) => {
      this.animeId = params['id'];

      this.animeService.getAnimeById(this.animeId).subscribe((data) => {
        this.animeDetails = data;
      });
    });
  }

  private initAnimeLoop(): void {
    this.videoplay();
  }

  private videoplay(): void {
    $(".video .play-btn").on("click", function (event) {
      event.preventDefault();
      $(".video .img-box").hide("slow");
      $(".video .video-box").show("slow");
    });
  }

}
