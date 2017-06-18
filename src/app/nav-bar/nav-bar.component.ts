import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  iconBoxes = [{
    icon: "home",
    heading: "We Are Located",
    text: "in and around Sydney"
  }, {
    icon: "check",
    heading: "Contact Us For",
    text: "your free consultation"
  }];

  linkIconBoxes = [{
    icon: "facebook",
    link: "https://www.facebook.com/bestchoicecare.com.au"
  }, {
    icon: "phone",
    text: "1300 407 705",
    link: "tel:1300 407 705"
  }];
}