import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'link-icon-box',
  templateUrl: './link-icon-box.component.html',
  styleUrls: ['./link-icon-box.component.css']
})
export class LinkIconBoxComponent implements OnInit {

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
