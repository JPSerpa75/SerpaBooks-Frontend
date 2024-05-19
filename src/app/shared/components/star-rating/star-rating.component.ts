import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.svg',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  stars = [1, 2, 3, 4, 5];

  @Input() ratingValue = 0;
  @Input() onlyView = false;
  @Output() ratingValueChange: EventEmitter<number> = new EventEmitter();

  selectStar(value: number) {
    if (this.onlyView) {
      return;
    }
    this.ratingValue = value;
    this.ratingValueChange.emit(this.ratingValue);
  }
}
