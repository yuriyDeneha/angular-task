import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent implements OnInit {
  @Input()
  description: string = '';
  constructor() {}

  class = 'red';

  ngOnInit(): void {
    if (this.description.length > 100) {
      this.class = 'green';
    } else if (this.description.length > 50) {
      this.class = 'orange';
    }
  }
}
