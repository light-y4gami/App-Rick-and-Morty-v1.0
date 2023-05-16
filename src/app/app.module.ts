import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { AboutComponent } from './components/about/about.component';

import { DataService } from './services/data.service';
import { CharactersService } from './services/characters.service';
import { EpisodeService } from './services/episode.service';
import { CarouselSlideComponent } from './components/carousel-slide/carousel-slide.component';
import { ScrollBtnComponent } from './components/scroll-btn/scroll-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CharactersComponent,
    EpisodeComponent,
    FotterComponent,
    AboutComponent,
    CarouselSlideComponent,
    ScrollBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService, CharactersService, EpisodeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
