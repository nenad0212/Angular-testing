import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    constructor(private _http: HttpClient) {

    }

    productsUrl = './api/products/products.json';
    getProducts(): Observable<IProduct[]> {
      return this._http.get<IProduct[]>(this.productsUrl);
    }
}
