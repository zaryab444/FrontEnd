import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductsService {

  constructor(private http: HttpClient) { }

  getProductData() {
    return this.http.get<any>('assets/products.json')
  }
}
