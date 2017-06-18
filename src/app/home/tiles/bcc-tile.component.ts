import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bcc-tile',
  templateUrl: './bcc-tile.component.html',
  styleUrls: ['./bcc-tile.component.css']
})
export class BccTileComponent implements OnInit {

  @Input() tile: any;
  
  constructor() { }

  ngOnInit() {
  }

  get tileIconClass() {
    return {
      [`fa-${this.tile.header.icon}`]: true
    };
  }
}
