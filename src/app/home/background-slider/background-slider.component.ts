import { Component, OnInit } from '@angular/core';
import { IParallaxConfig } from '../../common/parallax.directive';

@Component({
  selector: 'background-slider',
  templateUrl: './background-slider.component.html',
  styleUrls: ['./background-slider.component.css']
})
export class BackgroundSliderComponent implements OnInit {
  parallaxConfig: IParallaxConfig = {
    initialValue: -300,
    ratio: .15
  };

  constructor() { }

  ngOnInit() {
  }

}
