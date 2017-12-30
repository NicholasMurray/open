import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'open-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  @Input()
  flipHamburger: boolean = true;

  ngOnInit() {
  }

}
