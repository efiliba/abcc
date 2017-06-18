import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.css']
})
export class IconBoxComponent implements OnInit {

  @Input() content: any;
  
  constructor() { }

  ngOnInit() {
  }

  get iconClass() {
    return {
      [`fa-${this.content.icon}`]: true
    };
  }
}
