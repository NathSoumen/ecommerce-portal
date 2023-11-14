import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  url = environment.api_url;

  constructor(private http: HttpClient) {}
  getProductDetails(pid: string) {
    return this.http.get(this.url + '/items/' + pid);
  }
  getListOfProduct() {
    return this.http.get(this.url + '/items');
  }
}
