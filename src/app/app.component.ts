import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'languagePare';
  automation = [
  	{"name":"яз1", "Mapped":true},
  	{"name":"яз2", "Mapped":true},
  	{"name":"яз3", "Mapped":false},
  	{"name":"яз4", "Mapped":true},
  	{"name":"яз5", "Mapped":false},

  ];
  monitor= [
  	{"name":"яз1", "Mapped":false},
  	{"name":"яз3", "Mapped":true},
  	{"name":"яз3", "Mapped":false},
  	{"name":"яз4", "Mapped":false},
  	{"name":"яз5", "Mapped":false},
  	{"name":"яз6", "Mapped":true},
  	{"name":"яз7", "Mapped":false},
  	{"name":"яз8", "Mapped":false},
  ];
}
