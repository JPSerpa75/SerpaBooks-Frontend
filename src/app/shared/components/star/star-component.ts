import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'star, [comp-star]',
  templateUrl: './star.component.svg',
  styleUrl: './star.component.scss',
})
export class StarComponent {
  @Input() selected = false;
  @Input() value = 0;

  @Output() starSelect: EventEmitter<number> = new EventEmitter();

  selectStar() {
    this.starSelect.emit(this.value);
  }
}
