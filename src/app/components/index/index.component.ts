import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    margin:10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  // dữ liệu động lấy từ data base
  imagesList = [
    "./assets/images/product-05.png",
    "./assets/images/product-04.png",
    "./assets/images/product-03.png",
    "./assets/images/product-02.png",
    "./assets/images/product-05.png"

  ];

  banners = [
    "./assets/images/slide-bg-1.jpg",
    "./assets/images/slide-bg-2.jpg",
    "./assets/images/slide-bg-1.jpg"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
