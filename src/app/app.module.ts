import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

import { MoviesComponentComponent } from './movies-component/movies-component.component';
import { SeriesComponentComponent } from './series-component/series-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderMovieComponentComponent } from './header-movie-component/header-movie-component.component';
import { HeaderSeriesComponentComponent } from './header-series-component/header-series-component.component';
import { HeaderHomeComponentComponent } from './header-home-component/header-home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,

    MoviesComponentComponent,
    SeriesComponentComponent,
    FooterComponentComponent,
    HeaderMovieComponentComponent,
    HeaderSeriesComponentComponent,
    HeaderHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
