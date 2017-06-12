import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent
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
