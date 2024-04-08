import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrl: './books-details.component.scss'
})
export class BooksDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateToList() {
    this.router.navigate([''])
  }


}
