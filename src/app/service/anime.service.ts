import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) { }

  getAnimeList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/anime");
  }

  getAnimeTrendingList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/top/anime");
  }

  getAnimeById(animeId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/anime/" + animeId + "/full");
  }

  getThisSeasonAnimeList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/seasons/now");
  }

  getCharactersList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/characters");
  }

  getCharacterById(characterId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/characters/" + characterId + "/full");
  }

  getAnimeNewsList(animeId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/anime/" + animeId + "/news");
  }
}
