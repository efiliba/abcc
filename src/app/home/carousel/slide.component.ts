import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() slide: string;

  constructor() { }

  ngOnInit() {
  }

}
