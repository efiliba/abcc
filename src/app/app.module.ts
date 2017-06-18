import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BccTilesComponent } from './home/tiles/bcc-tiles.component';
import { BackgroundSliderComponent } from './home/background-slider/background-slider.component';
import { NewsComponent } from './home/news/news.component';
import { SlideComponent } from './home/carousel/slide.component';
import { Parallax } from './common/parallax.directive';
import { BccTileComponent } from './home/tiles/bcc-tile.component';
import { IconBoxComponent } from './home/icon-box/icon-box.component';
import { LinkIconBoxComponent } from './home/icon-box/link-icon-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    BccTilesComponent,
    BackgroundSliderComponent,
    NewsComponent,
    SlideComponent,
    Parallax,
    BccTileComponent,
    IconBoxComponent,
    LinkIconBoxComponent
  ],
  imports: [
    // Routing,
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
