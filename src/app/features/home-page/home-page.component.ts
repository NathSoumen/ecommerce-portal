import { HttpService } from 'src/app/utilities/services/httpService/http.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpResponse } from 'src/app/interfaces/httpResponse';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnChanges {
  allProductList: Array<any> = [];
  filterdProductList: Array<any> = [];
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
    this.getProducts();
    this.filterdProductList = [
      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },

      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },

      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },

      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },

      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },

      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },

      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },

      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },

      {
        productName: 'MAC BOOK PROv 5',
        originalPrice: 135,
        disCountedPrice: 100,
        imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      },
    ];
  }
  getProducts() {
    this.httpService.getListOfProduct().subscribe((response: any) => {
      console.log('getListOfProduct,resposne',response);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
