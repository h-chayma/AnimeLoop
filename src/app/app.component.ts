import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animeLoop';
  constructor() { }

  ngOnInit(): void {
    this.initAnimeLoop();
  }

  private initAnimeLoop(): void {
    this.hidePreloader();
    this.animeBackToTop();
  }

  private hidePreloader(): void {
    $('#preloader').hide();
  }

  private animeBackToTop(): void {
    var btn = $("#backto-top");
    if ($(window)) {
      $(window).on("scroll", function () {
        if ($(window)?.scrollTop()! > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
    }

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "300"
      );
    });
  }
}
