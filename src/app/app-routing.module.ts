import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { title: 'Home - Rick and Morty', path: '', component: HomeComponent },
  {
    title: 'Characters - Rick and Morty',
    path: 'characters',
    component: CharactersComponent,
  },
  {
    title: 'Episodes - Rick and Morty',
    path: 'episode',
    component: EpisodeComponent,
  },
  { title: 'About - Rick and Morty', path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
