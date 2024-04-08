import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './views/grid-list/grid-list.component';

const routes: Routes = [
  {
    path: '',
    component: GridListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
