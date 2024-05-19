import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InfoLivroGridModel } from '../../../../models/info-livro-grid-model';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.scss',
})
export class CardBookComponent {
  @Input() gridList!: InfoLivroGridModel[];

  constructor(private router: Router) {}

  openDetails(idInfoLivro: number) {
    this.router.navigate(['/details', idInfoLivro]);
  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

  setValue(nota: number): number {
    return nota / 5;
  }
}
