import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anime/:id', component: AnimeDetailsComponent },
  { path: 'list', component: AnimeListComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
