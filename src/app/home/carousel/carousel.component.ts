import { Component, OnInit } from '@angular/core';
import { ICarouselSlide } from './carousel.interface';

@Component({
  selector: 'main-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides: ICarouselSlide[] = [{
    image: {
      source: "assets/images/Get-To-Know-Us-1400x520.png",
      alternate: "Get to know us"
    }
  }, {
    image: {
      source: "assets/images/slider-2-1400x520.png",
      alternate: "Second slide"
    },
    caption: {
      heading: "Live Safely In Your Own Home"
    }
  }, {
    image: {
      source: "assets/images/disability-slider-2--1400x520.png",
      alternate: "Third slide"
    },
    caption: {
      heading: "Live Comfortably On Your Own Terms"
    }
  }, {
    image: {
      source: "assets/images/newheader-1400x520.png",
      alternate: "Last slide"
    },
    caption: {
      heading: "Affordable, Reliable, Personalised Home Care Services",
      anchor: {
        link: "http://bestchoicecare.com.au/get-started",
        text: "best choice care"
      }
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
