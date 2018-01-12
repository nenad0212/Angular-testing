import { Component } from "@angular/core";


@Component({
    selector:`pm-products`,
    templateUrl:'./product-list.component.html'
})

export class ProductListComponent{
products : any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling cart",
            "price": 32.99,
            "starRating":4.2,
            "imageUrl":"#"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "March 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "#"
        },
    ];
}