import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ProductApiService } from 'src/app/utilities/services/httpService/product_api/product-api.service';
import { isEmpty } from 'lodash';
@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
})
export class ProductOverviewComponent implements OnDestroy, OnInit {
  product: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private productApi: ProductApiService
  ) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    combineLatest(
      this.activateRoute.params,
      this.activateRoute.queryParams
    ).subscribe(([params, queryParams]) => {
      console.log({ params, queryParams });
      if (isEmpty(params) === false) {
        this.productApi
          .getProductDetails(params['pid'])
          .subscribe((response) => {
            console.log('getProductDetails', response);
          });
      }
    });
  }
}
