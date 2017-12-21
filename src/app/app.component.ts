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

  ngOnInit() {
  }

  toggleSidebarActive() {
    console.log('side bar toggled');
    this.isSidebarActive = !this.isSidebarActive;
  }

}
