import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnChanges {


  allProductList: Array<any> = [];
  filterdProductList: Array<any> = []
  constructor() { }
  ngOnInit(): void {
    this.filterdProductList = [

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },

      {
        productName: "MAC BOOK PROv 5",
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      },
    ]
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

}
