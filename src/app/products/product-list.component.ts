import { Component } from '@angular/core';
import { log } from 'util';
import { IProduct } from './product';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './product.service';


@Component({
    // tslint:disable-next-line:component-selector
    selector: `pm-products`,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{


  thumbnailWidthInPx: number = 100;
  showImage: boolean = false;
  _listFilter: string;
  pageTitle: string = 'Product List';
  filteredProducts: IProduct[];
  products: IProduct[];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFiltering(this.listFilter) : this.products;
  }

  constructor(private _productService: ProductService) {

  }

  toggleImageHandler(): void {

    this.showImage = !this.showImage;
    console.log('toggle image btn clicked: showImage:' + this.showImage);
  }
  ngOnInit(): void {
    console.log('In lifecycle hook: OnInit');
    // this.products = this._productService.getProducts();
    // this.filteredProducts = this.products;
    this._productService.getProducts().subscribe(
      products => { this.products = products; this.filteredProducts = this.products; }
    );
  }

  performFiltering(listFilter: string) {
    const filter = listFilter.toLocaleLowerCase();
    const result = this.products.filter(product => product.productName.toLocaleLowerCase().indexOf(filter) !== -1);
    return result;
  }

  ratingClickedEventHandler(message: string): void {
    this.pageTitle = `Product List: received a message sent via nested starRating component: ${message}`;
  }
}
