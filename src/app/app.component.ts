import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  banners = [
    "./assets/images/slide-bg-1.jpg",
    "./assets/images/slide-bg-2.jpg",
    "./assets/images/slide-bg-1.jpg"
  ];
  title = 'angular';
}
