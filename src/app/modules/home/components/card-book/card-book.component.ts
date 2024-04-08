import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoLivroGridModel } from '../../../../models/info-livro-grid-model';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.scss'
})
export class CardBookComponent implements OnInit {

  @Input() gridList!: InfoLivroGridModel[]

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  openDetails(idInfoLivro: number){
    console.log(idInfoLivro)
    this.router.navigate(['/details'])
  }

}
