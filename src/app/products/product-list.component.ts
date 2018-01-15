import { Component } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: `pm-products`,
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {

  thumbnailWidthInPx: number = 100;

products: any[] = [
        {
            'productId': 2,
            'productName': 'Healty Care CoEnzyme Q10 150mg 100 Capsules',
            'productCode': '000001',
            'releaseDate': 'March 18, 2016',
            'description': 'Support heart health',
            'price': 25.99,
            'original price': 32.99,
            'starRating': 4.2,
'imageUrl' : 'https://static.chemistwarehouse.com.au/ams/media/pi/67884/F2D_200.jpg'
        },
        {
            'productId': 5,
            'productName': 'Healthy Care Lecithin 1200mg 100',
            'productCode': '000002',
            'releaseDate': 'March 21, 2016',
            'description': 'Supports fat metabolism',
            'price': 8.99,
            'original price': 9.99,
            'starRating': 4.8,
'imageUrl' : 'https://static.chemistwarehouse.com.au/ams/media/pi/70243/F2D_200.jpg'
        },
    ];
}
