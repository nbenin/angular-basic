import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `,

})
export class AppComponent implements OnInit{
  title :string;

  ngOnInit(): void {
    // call a service to get data
    this.title = "Hello Bitches";
  }
}
