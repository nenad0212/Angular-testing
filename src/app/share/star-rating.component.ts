import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';


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

  @Output() clickEvent: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.starWidth = this.rating * 86 / 5;
  }
  clickHandler(): void {
    console.log('clickHandler: clicked');
    this.clickEvent.emit(this.rating.toString());
  }
}
