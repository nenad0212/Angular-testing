
import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
      <div>
        <h1>{{pageTitle}}</h1>
          <nav><a routerLink="/product-detail">Product Detail</a></nav>
          <router-outlet></router-outlet>
        <pm-products></pm-products>
      </div>
  `,
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
