import { IProduct } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                'productId': 2,
                'productName': 'Healty Care CoEnzyme Q10 150mg 100 Capsules',
                'productCode': '00-0001',
                'releaseDate': 'March 18, 2016',
                'description': 'Support heart health',
                'price': 25.99,
                'originPrice': 32.99,
                'starRating': 4.2,
    'imageUrl' : 'https://static.chemistwarehouse.com.au/ams/media/pi/67884/F2D_200.jpg'
            },
            {
                'productId': 5,
                'productName': 'Healthy Care Lecithin 1200mg 100',
                'productCode': '00-0002',
                'releaseDate': 'March 21, 2016',
                'description': 'Supports fat metabolism',
                'price': 8.99,
                'originPrice': 9.99,
                'starRating': 4.8,
    'imageUrl' : 'https://static.chemistwarehouse.com.au/ams/media/pi/70243/F2D_200.jpg'
            },
            {
                'productId': 6,
                'productName': 'Healthy Care Propolis Toothpaste 120g',
                'productCode': '00-0003',
                'releaseDate': 'March 21, 2017',
                'description': 'It not only protects your teeth from decay but it also promotes healthy gums and fresh breath.',
                'price': 2.99,
                'originPrice': 2.99,
                'starRating': 4.5,
    'imageUrl' : 'https://static.chemistwarehouse.com.au/ams/media/pi/59410/F2D_800.jpg'
            },
        ];
    }
}
