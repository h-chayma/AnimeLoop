import { AfterViewInit, Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  animeList: any;
  animeTrendingList: any;
  ThisSeasonAnimeList: any;

  constructor(private animeService: AnimeService) { }

  ngAfterViewInit(): void {
    this.initAnimeLoop();
  }

  ngOnInit(): void {
    this.animeService.getAnimeList().subscribe((data) => {
      this.animeList = data;
    });

    this.animeService.getAnimeTrendingList().subscribe((data) => {
      this.animeTrendingList = data;
    });

    this.animeService.getThisSeasonAnimeList().subscribe((data) => {
      this.ThisSeasonAnimeList = data;
    });
  }

  private initAnimeLoop(): void {
    this.initializeSlick();
  }

  private initializeSlick(): void {
    if ($(".banner-slider").length) {
      $(".banner-slider").slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
            },
          },
        ]
      });
    }
    if ($(".date-slider").length) {
      $(".date-slider").slick({
        infinite: true,
        arrows: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: true,
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              slidesToShow: 3,
            },
          },
        ],
      });
    }
  }

  getShortestTitle(titles: any[]): string {
    if (!titles || titles.length === 0) {
      return '';
    }

    const shortestTitle = titles.reduce((shortest, current) => {
      return current.title.length < shortest.title.length ? current : shortest;
    }, titles[0]);

    return shortestTitle.title;
  }
}