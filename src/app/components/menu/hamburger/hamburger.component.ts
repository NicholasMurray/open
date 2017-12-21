import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  isHamburgerActive = false;

  ngOnInit() {
  }

  toggleActive() {
    this.isHamburgerActive = !this.isHamburgerActive;
  }

}
