import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './views/grid-list/grid-list.component';
import { CardBookComponent } from './components/card-book/card-book.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoLivroStore } from '../../stores/info-livro-store';
import { SharedModule } from '../../shared/shared.module';
import { EditoraStore } from '../../stores/editora-store';
import { AutorStore } from '../../stores/autor-store';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GridListComponent, CardBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgSelectModule,
    SharedModule,
    NgbRatingModule,
  ],
  providers: [InfoLivroStore, EditoraStore, AutorStore],
})
export class HomeModule {}
