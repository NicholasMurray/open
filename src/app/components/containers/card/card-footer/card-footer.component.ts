import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-card-footer',
  host: {'class': 'card-footer'},
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
