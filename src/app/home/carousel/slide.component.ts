import { Component, OnInit, Input } from '@angular/core';
import { ICarouselSlide } from './carousel.interface';

@Component({
  selector: 'carousel-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() slide: ICarouselSlide;

  constructor() { }

  ngOnInit() {
  }

}

