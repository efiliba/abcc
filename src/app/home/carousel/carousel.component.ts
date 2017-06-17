import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides = [{
    image: {
      source: "assets/images/Get-To-Know-Us-1400x520.png",
      alternate: "Get to know us"
    }
  }, {
    image: {
      source: "assets/images/slider-2-1400x520.png",
      alternate: "Second slide"
    },
    caption: `
      <div class="carousel-caption">
        <div class="thbs_caption_content">
          <h4 class="thbs_title">Live Safely In Your Own Home</h4>
        </div>
      </div>
    `
  }, {
    image: {
      source: "assets/images/disability-slider-2--1400x520.png",
      alternate: "Third slide"
    },
    caption: `
      <h4 class="thbs_title">Live Comfortably On Your Own Terms</h4>
    `
  }, {
    image: {
      source: "assets/images/newheader-1400x520.png",
      alternate: "Last slide"
    },
    caption: `
      <h4 class="thbs_title">Affordable, Reliable, Personalised Home Care Services</h4>
      <a href="http://bestchoicecare.com.au/get-started/" class="thbs_more">best choice care</a>
    `
  }];

  constructor() { }

  ngOnInit() {
  }

}
