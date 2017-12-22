import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'open-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  // isHamburgerActive = false;

  // @Input()
  // isHamBurgerFlipDisabled: boolean = false;
  @Input()
  flipHamburger: boolean = true;

  ngOnInit() {
  }

  // toggleActive() {
  //   if (!this.isHamBurgerFlipDisabled) {
  //     this.isHamburgerFlipped = !this.isHamburgerFlipped;
  //   }
  // }
}
