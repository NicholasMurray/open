import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  constructor() { }

  title = 'Angular Open';
  isSidebarActive = false;
  isHamburgerFlipped: boolean = false;

  ngOnInit() {
    console.log('isSidebarActive:' + this.isSidebarActive);
  }

  toggleSidebarActive() {
    this.isHamburgerFlipped = !this.isHamburgerFlipped;
    this.isSidebarActive = !this.isSidebarActive;
  }

}
