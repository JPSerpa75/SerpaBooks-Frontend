import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksDetailsComponent } from './views/books-details/books-details.component';

const routes: Routes = [
  {
    path: '',
    component: BooksDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
