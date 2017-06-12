import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BccTilesComponent } from './home/tiles/bcc-tiles.component';
import { BackgroundSliderComponent } from './home/background-slider/background-slider.component';
import { NewsComponent } from './home/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    BccTilesComponent,
    BackgroundSliderComponent,
    NewsComponent
  ],
  imports: [
    // Routing,
    CarouselModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
