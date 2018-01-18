import { Component, Input, OnChanges, OnInit } from '@angular/core';



@Component({
  // tslint:disable-next-line:component-selector
  selector: `pm-star`,
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
// export class StarRatingComponent implements OnChanges {

//   @Input() rating: number;
//   starWidth: number = 20;

//   ngOnChanges() {
//       this.starWidth = this.rating * 86 / 5;
//   }
// }

export class StarRatingComponent implements OnInit {
  @Input() rating: number;
  starWidth: number = 20;

  ngOnInit() {
    this.starWidth = this.rating * 86 / 5;
  }
}
