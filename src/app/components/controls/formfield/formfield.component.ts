import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'open-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss']
})
export class FormfieldComponent implements OnInit {

  @Input()
  labelText: string = 'Label';

  @Input()
  placeholderText: string = 'Placeholder';

  constructor() { }

  ngOnInit() {
  }

}
