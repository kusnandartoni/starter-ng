import { Component, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'will be dashboard page';
  }

  ngAfterViewInit() {}
}
