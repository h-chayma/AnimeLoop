import { Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: any;
  id = "1";

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimeNewsList(this.id).subscribe((data) => {
      this.blogs = data;
    });
  }
}
