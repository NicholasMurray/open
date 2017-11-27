import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-card-body',
  host: {'class': 'card-body'},
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
