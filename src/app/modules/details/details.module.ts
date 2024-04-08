import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksDetailsComponent } from './views/books-details/books-details.component';
import { RouterModule } from '@angular/router';
import { DetailsRoutingModule } from './details-routing.module';


@NgModule({
  declarations: [
    BooksDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DetailsRoutingModule,
  ]
})
export class DetailsModule { }
