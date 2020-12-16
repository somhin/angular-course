import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.scss'],
})
export class CountingComponent implements OnInit {
  @Input()
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  Increment(): number {
    return this.count++;
  }
}
